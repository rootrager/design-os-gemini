<img width="1280" height="640" alt="Design OS - Gemini Edition" src="https://github.com/user-attachments/assets/a9c04258-7b9a-45b6-8475-3431cdf5dbe9" />

# Design OS - Gemini Edition

## The missing design process between your idea and your codebase.

**Design OS - Gemini Edition** is a modified, cost-efficient version of [Design OS](https://buildermethods.com/design-os). It helps you define your product vision, structure your data model, design your UI, and export production-ready components using **Gemini CLI** instead of Claude Code.

Rather than jumping straight into code, you work through a guided process that captures what you're building and why—then hands off everything your coding agent needs to build it right.

## Why Gemini Edition?

The original Design OS is an incredible tool, but it relies on Claude Code. This version was created to:
- **Reduce Costs**: Leverage the generous free tier of Google's Gemini models via the CLI.
- **Local Integration**: Use a local bridge server to communicate with the `gemini-cli` tool directly.
- **Persian Support**: Optimized for developers working in multilingual (RTL/LTR) environments.

## The Design OS Process

1. **Product Planning** — Define your vision, break down your roadmap, and model your data
2. **Design System** — Choose colors, typography, and design your application shell
3. **Section Design** — For each feature area: specify requirements, generate sample data, and design the screens
4. **Export** — Generate a complete handoff package for implementation

---

## Installation & Setup

### 1. Prerequisites

You must have the [Gemini CLI](https://github.com/google/generative-ai-python) (or a similar compatible CLI tool that supports `-p` and `--output-format json`) installed and configured on your system.

```bash
# Example (if using the standard gemini-cli)
pip install google-generativeai
# Ensure gemini command is in your PATH
```

### 2. Clone and Install Dependencies

```bash
git clone https://github.com/yourusername/design-os-gemini.git
cd design-os-gemini
npm install
```

### 3. Running the Project

Design OS requires both the client and the bridge server to be running:

```bash
npm run dev
```

This will start:
- **Client**: `http://localhost:5173` (Vite)
- **Bridge Server**: `http://localhost:3001` (Express bridge to Gemini CLI)

---

## Created by Brian Casel @ Builder Methods
### Modified for Gemini by [Your Name / Username]

Original tool created by Brian Casel, the creator of [Builder Methods](https://buildermethods.com). This fork adapts the intelligence engine to use Gemini for enhanced accessibility and cost-efficiency.

- [Original Design OS](https://buildermethods.com/design-os)
- [Gemini Documentation](https://ai.google.dev/docs)

---

## License

MIT License - See [LICENSE](LICENSE) for details.
