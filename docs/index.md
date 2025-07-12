# Homepage (docs/index.md)

---
layout: home

hero:
  name: "Test Framework"
  text: "YAML-based Test Automation"
  tagline: "Simple, powerful, and maintainable test automation with Playwright MCP integration"
  image:
    src: /hero-image.svg
    alt: Test Framework Logo
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View Examples
      link: /examples/basic-setup
    - theme: alt
      text: GitHub
      link: https://github.com/yourusername/test-framework

features:
  - icon: 🎯
    title: YAML-based Definitions
    details: Easy to write and maintain test definitions using simple, human-readable YAML syntax. No complex code required.
  - icon: 🚀
    title: Playwright MCP Integration
    details: Leverages AI-powered test execution with Playwright MCP Server for intelligent and robust test automation.
  - icon: 📊
    title: Rich HTML Reports
    details: Comprehensive test results with key statistics, visual feedback, and detailed execution traces.
  - icon: 🔧
    title: Environment Support
    details: Multiple environment configurations for development, staging, and production testing workflows.
  - icon: 📸
    title: Automatic Artifacts
    details: Screenshot collection and trace files automatically captured for debugging and documentation.
  - icon: 🏗️
    title: CI/CD Ready
    details: GitHub Actions workflow included for seamless continuous integration and deployment.
  - icon: 🔄
    title: Reusable Step Libraries
    details: Modular design with reusable step libraries that can be shared across multiple test cases.
  - icon: 🐙
    title: GitHub Integration
    details: Automated PR comments, GitHub Pages deployment, and seamless integration with your development workflow.
  - icon: 🔍
    title: Advanced Validation
    details: Built-in YAML validation ensures your test definitions are correct before execution.
---

## Quick Example

Here's how simple it is to create a test case:

```yaml
# test-cases/user-login.yml
name: "User Login Test"
description: "Test user authentication functionality"
tags:
  - smoke
  - login
  - authentication
environment_variables:
  - BASE_URL
  - TEST_USERNAME
  - TEST_PASSWORD
steps:
  - include: "navigation"
  - include: "login"
  - "Verify user dashboard is displayed"
  - "Verify user name appears in header"
  - include: "cleanup"
```

## Why Choose This Framework?

::: info Key Benefits
- **No coding required** - Write tests in simple YAML format
- **AI-powered execution** - Leverage Gemini and Playwright MCP for intelligent test execution
- **Modular design** - Reuse step libraries across multiple test cases
- **Beautiful reports** - Get comprehensive HTML reports with screenshots and traces
- **CI/CD ready** - Seamless integration with GitHub Actions and other CI/CD tools
:::

## Getting Started is Easy

1. **Install** the framework and dependencies
2. **Create** your first YAML test files
3. **Run** tests with a single command
4. **View** beautiful HTML reports

[Start building your tests now →](/getting-started)

## Community and Support

- 📚 **Documentation** - Comprehensive guides and examples
- 💬 **Community** - Join our discussions on GitHub
- 🐛 **Issues** - Report bugs and request features
- 🤝 **Contributing** - Help improve the framework

---

*Built with ❤️ for the testing community*