# Getting Started

Welcome to the Test Framework documentation! This guide will help you set up and run your first test.

## Quick Start

### 1. Install Prerequisites

```bash
# Install Node.js (version 14 or higher)
# Install the test framework
npm install -g playwright-mcp-yaml-test

# Install Gemini CLI
npm install -g @google/gemini-cli
```
### 2. Set Up Your Project
```bash
mkdir my-test-project
cd my-test-project
```
#### Create your project structure: 
my-test-project/
├── .gemini/
│   └── settings.json
├── steps/
├── test-cases/
├── test-suites/
└── .env.dev

### 3. Configure Gemini
#### Create .gemini/settings.json:
```json
{
  "theme": "GitHub",
  "selectedAuthType": "oauth-personal",
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--user-data-dir", "gemini-playwright",
        "--save-trace",
        "--output-dir", "test-artifacts"
      ]
    }
  },
  "autoAccept": true
}
```