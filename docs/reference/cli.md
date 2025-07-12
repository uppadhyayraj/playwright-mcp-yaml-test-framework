## Command Line Interface
This framework comes with following commands:

### 1. Test Execution Commands

```bash
# Run specific test case
playwright-mcp-yaml-tester --test-case test-cases/user-login.yml

# Run test suite
playwright-mcp-yaml-tester --test-suite test-suites/smoke-tests.yml

# Run all test cases
playwright-mcp-yaml-tester

# Run with specific environment
playwright-mcp-yaml-tester --environment staging --test-case test-cases/user-login.yml
```

### 2. Test Validation Commands
```bash
# Validate specific test case
playwright-mcp-yaml-validator --test-case test-cases/user-login.yml

# Validate specific test suite
playwright-mcp-yaml-validator --test-suite test-suites/smoke-tests.yml

# Validate all files
playwright-mcp-yaml-validator --all
```