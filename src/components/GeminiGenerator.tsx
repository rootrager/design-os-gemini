
import React, { useState } from 'react';
import { generateCodeWithGemini } from '../lib/gemini-cli';

function downloadCode(code: string) {
    const element = document.createElement("a");
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "gemini-code.txt";
    document.body.appendChild(element);
    element.click();
}

export function GeminiGenerator() {
  const [generating, setGenerating] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  async function handleGenerate() {
    setGenerating(true);
    setError('');

    try {
      const generatedCode = await generateCodeWithGemini();
      setCode(generatedCode);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="gemini-generator">
      <h2>Generate with Gemini CLI</h2>

      <button
        onClick={handleGenerate}
        disabled={generating}
      >
        {generating ? 'Generating...' : 'Generate Code'}
      </button>

      {error && (
        <div className="error">Error: {error}</div>
      )}

      {code && (
        <div className="code-output">
          <h3>Generated Code:</h3>
          <pre>{code}</pre>
          <button onClick={() => downloadCode(code)}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}
