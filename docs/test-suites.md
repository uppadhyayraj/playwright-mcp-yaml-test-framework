### Test Suite Syntax

```yaml
name: "Test Suite Name"
description: "Description of the test suite purpose"
tags:                    # Optional: Suite-level tags
  - suite-tag1
  - suite-tag2
environment: "dev"       # Optional: Default environment
test-cases:
  - "test-cases/test-case-1.yml"
  - "test-cases/test-case-2.yml"
```

### Creating Test Suites

1. Create a new `.yml` file in the `test-suites/` directory
2. Define required fields: `name` and `test-cases`
3. List test case file paths in the `test-cases` array
4. Add optional metadata: `description`, `tags`, `environment`

### Test Suite Example
Create following files in your test-suites directory:

#### Smoke Test Suite (`test-suites/smoke-tests.yml`)
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
  - "test-cases/add-product-to-cart.yml"
```