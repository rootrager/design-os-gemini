import express from 'express';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const app = express();

app.use(express.json());

app.post('/api/gemini/generate', async (req, res) => {
  const { prompt, context } = req.body;

  const fullPrompt = context
    ? `${context}\n\n${prompt}`
    : prompt;

  try {
    const command = `gemini -p "${fullPrompt.replace(/"/g, '\\"')}" --output-format json`;
    const { stdout } = await execAsync(command);

    const response = JSON.parse(stdout);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Gemini CLI server running on port 3001');
});