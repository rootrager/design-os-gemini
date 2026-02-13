
import { loadProductData } from './product-loader';
import { getAllSectionIds, loadSectionData } from './section-loader';
import type { Project } from '@/types/product';
import type { SectionData } from '@/types/section';

interface GeminiResponse {
  response: string;
  stats: {
    models: Record<string, any>;
    tokens: Record<string, any>;
  };
}

export async function callGeminiAPI(
  prompt: string,
  context?: string
): Promise<GeminiResponse> {
  const response = await fetch('/api/gemini/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, context }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Gemini API request failed');
  }

  return response.json();
}

export async function generateCodeWithGemini(): Promise<string> {
  const productData = loadProductData();
  const sectionIds = getAllSectionIds();
  const sections = sectionIds.map(id => loadSectionData(id));

  const project = {
    ...productData,
    sections,
  };

  const context = buildProjectContext(project as any);

  const prompt = `
       Based on the above project specification, generate:
       1. All React components
       2. Tailwind config
       3. File structure
       
       Return the code in a structured format.
     `;

  const response = await callGeminiAPI(prompt, context);
  return response.response;
}

function buildProjectContext(project: Project & { sections: SectionData[] }): string {
  return `
# Product: ${project.overview?.name || 'Unnamed Project'}

## Product Vision
${project.overview?.description || ''}

## Data Model
${JSON.stringify(project.dataModel, null, 2)}

## Design System
Colors: ${JSON.stringify(project.designSystem?.colors, null, 2)}
Typography: ${JSON.stringify(project.designSystem?.typography, null, 2)}

## Sections
${project.sections?.map(s => `
### ${s.specParsed?.title || s.sectionId}
${s.specParsed?.overview || ''}
`).join(`
`)}
     `;
}
