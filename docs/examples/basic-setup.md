## Pre-Requisites
Before using this test automation framework, ensure you have the following components installed and configured:

### 1. System Requirements

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher
- **Operating System**: Windows, macOS, or Linux

### 2. Install the playwright-mcp-yaml-test NPM packge
```bash
npm install -g playwright-mcp-yaml-test
```
### 3. Install Gemini CLI

```bash
# Install Gemini CLI globally
npm install -g @google/gemini-cli

# Or install using your preferred package manager
# yarn global add @google/gemini-cli
# pnpm add -g @google/gemini-cli
```
Run "gemini" command on your terminal or command prompt to follow the instructions to setup and authenticate Gemini CLI. For more details refer official Google Gemini CLI page.

### 4. Update Gemini Model (by default it uses:gemini-2.5-pro)

```bash
export GEMINI_MODEL=gemini-2.5-flash
```