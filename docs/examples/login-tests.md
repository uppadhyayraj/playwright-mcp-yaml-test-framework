### Creating Test Cases

1. Create a new `.yml` file in the `test-cases/` directory
2. Define required fields: `name` and `steps`
3. Add optional fields: `description`, `tags`, `environment_variables`
4. Combine step libraries and custom steps in the `steps` array

### Test Case Example
Create following files in your test-cases directory:

#### User Login Test (`test-cases/user-login.yml`)
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
  - include: "navigation"
  - include: "login"
  - "Verify user dashboard is displayed"
  - "Verify user name appears in header"
  - include: "cleanup"
```