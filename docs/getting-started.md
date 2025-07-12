# Getting Started

Welcome to the Test Framework! This guide will help you set up and run your first automated test in minutes.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **Git** (for version control)

::: tip System Requirements
The framework works on Windows, macOS, and Linux. For the best experience, we recommend using the latest LTS version of Node.js.
:::

## Installation

### 1. Install the Test Framework

```bash
npm install -g playwright-mcp-yaml-test
```

### 2. Install Gemini CLI

The framework uses Google's Gemini CLI for AI-powered test execution:

::: code-group
```bash [npm]
npm install -g @google/gemini-cli
```

```bash [yarn]
yarn global add @google/gemini-cli
```

```bash [pnpm]
pnpm add -g @google/gemini-cli
```
:::

### 3. Authenticate Gemini CLI

Run the following command and follow the authentication flow:

```bash
gemini
```

This will open a browser window where you can authenticate with your Google account.

### 4. Set Gemini Model (Optional)

By default, the framework uses `gemini-2.5-pro`. You can change this to use the faster `gemini-2.5-flash`:

```bash
export GEMINI_MODEL=gemini-2.5-flash
```

## Project Setup

### 1. Create Your Project Directory

```bash
mkdir my-test-project
cd my-test-project
```

### 2. Initialize Project Structure

Create the following directory structure:

```
my-test-project/
├── .gemini/
│   └── settings.json
├── steps/
├── test-cases/
├── test-suites/
├── .env.dev
├── .env.staging
└── .gitignore
```

### 3. Configure Gemini Settings

Create `.gemini/settings.json`:

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

::: warning Security Note
Add `.gemini/settings.json` to your `.gitignore` file to avoid committing sensitive authentication information.
:::

### 4. Set Up Environment Variables

Create `.env.dev` for your development environment:

```env
BASE_URL=https://www.saucedemo.com
TEST_USERNAME=standard_user
TEST_PASSWORD=secret_sauce
```

Create `.env.staging` for staging:

```env
BASE_URL=https://staging.saucedemo.com
TEST_USERNAME=staging_user
TEST_PASSWORD=staging_password
```

### 5. Create .gitignore

```gitignore
# Gemini settings (contains sensitive auth info)
.gemini/settings.json

# Environment files
.env*
!.env.example

# Test artifacts
test-artifacts/
test-reports/
gemini-playwright/

# Node modules
node_modules/

# Logs
*.log
npm-debug.log*
```

## Your First Test

Let's create a simple login test to get you started.

### 1. Create a Step Library

Create `steps/login.yml`:

```yaml
description: "User authentication with session management"
parameters:
  - BASE_URL
  - TEST_USERNAME
  - TEST_PASSWORD
steps:
  - "Navigate to {{BASE_URL}}"
  - "Check if user is already logged in by looking for user menu or dashboard"
  - "If not logged in, click login button or link"
  - "Fill username field with {{TEST_USERNAME}}"
  - "Fill password field with {{TEST_PASSWORD}}"
  - "Click login submit button"
  - "Wait for login success indicator"
  - "Verify user is logged in successfully"
```

### 2. Create a Test Case

Create `test-cases/user-login.yml`:

```yaml
name: "User Login Test"
description: "Test user authentication functionality"
tags:
  - smoke
  - login
  - authentication
  - critical
environment_variables:
  - BASE_URL
  - TEST_USERNAME
  - TEST_PASSWORD
steps:
  - include: "login"
  - "Verify user dashboard is displayed"
  - "Verify user name appears in header"
```

### 3. Create a Test Suite

Create `test-suites/smoke-tests.yml`:

```yaml
name: "Smoke Test Suite"
description: "Quick smoke tests for critical functionality"
tags:
  - smoke
  - critical
  - fast
environment: "dev"
test-cases:
  - "test-cases/user-login.yml"
```

## Running Your First Test

### 1. Validate Your Test Files

Before running tests, validate your YAML files:

```bash
playwright-mcp-yaml-validator --all
```

You should see:
```
✅ All validations passed!
```

### 2. Run the Test

Execute your test suite:

```bash
playwright-mcp-yaml-tester --test-suite test-suites/smoke-tests.yml
```

### 3. View Results

After the test completes, you'll see:

```bash
🚀 Running test suite: Smoke Test Suite
✓ Loaded environment: dev
✓ User Login Test
✅ Test execution completed
```

The framework will generate:
- **HTML Report**: `test-reports/index.html`
- **Screenshots**: `test-artifacts/screenshots/`
- **Traces**: `test-artifacts/traces/`

## What's Next?

🎉 **Congratulations!** You've successfully run your first test. Here's what you can explore next:

- [**Step Libraries**](/step-libraries) - Learn how to create reusable test components
- [**Test Cases**](/test-cases) - Understand test case structure and best practices
- [**Test Suites**](/test-suites) - Organize and group your tests effectively
- [**Examples**](/examples/basic-setup) - See more real-world examples

## Need Help?

If you run into any issues:

<!--1. Check the [**Troubleshooting Guide**](/reference/troubleshooting)
2. Review the [**FAQ**](/reference/faq)-->
3. [**Open an issue**](https://github.com/uppadhyayraj/playwright-mcp-yaml-test-framework/issues) on GitHub

## Video Tutorial

::: info Coming Soon
We're working on video tutorials to help you get started even faster. Stay tuned!
:::

---

Ready to build more comprehensive tests? <!--Let's dive into the [core concepts](/architecture) of the framework.-->