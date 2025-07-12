# Step Libraries

Step libraries are the building blocks of your test automation framework. They contain reusable test steps that can be shared across multiple test cases, promoting code reusability and maintainability.

## What are Step Libraries?

Step libraries are YAML files that define a collection of related test steps. Think of them as functions in programming - they encapsulate specific functionality that can be called from multiple places.

::: info Key Benefits
- **Reusability**: Write once, use everywhere
- **Maintainability**: Update logic in one place
- **Consistency**: Ensure consistent behavior across tests
- **Modularity**: Break down complex workflows into manageable chunks
:::

## Step Library Structure

Every step library follows this basic structure:

```yaml
description: "Brief description of the step library"
parameters:              # Optional: Environment variables used
  - VARIABLE_NAME
  - ANOTHER_VARIABLE
steps:
  - "Step description with {{VARIABLE_NAME}} interpolation"
  - "Another step action"
  - "Final step in sequence"
```

### Required Fields

- **`steps`**: An array of step descriptions that define the actions to perform

### Optional Fields

- **`description`**: A brief description of what this step library does
- **`parameters`**: List of environment variables that this library expects

## Creating Step Libraries

### 1. File Location

All step libraries must be placed in the `steps/` directory of your project:

```
project-root/
├── steps/
│   ├── login.yml
│   ├── navigation.yml
│   ├── form-validation.yml
│   └── cleanup.yml
```

### 2. Naming Conventions

Use descriptive, kebab-case names for your step library files:

- ✅ `user-authentication.yml`
- ✅ `product-search.yml`
- ✅ `payment-processing.yml`
- ❌ `test1.yml`
- ❌ `UserAuth.yml`

### 3. Variable Interpolation

Use `{{VARIABLE_NAME}}` syntax to inject environment variables:

```yaml
description: "Navigate to different pages"
parameters:
  - BASE_URL
  - API_VERSION
steps:
  - "Navigate to {{BASE_URL}}/api/{{API_VERSION}}/users"
  - "Wait for page to load"
  - "Verify API response is successful"
```

## Step Library Examples

### Navigation Steps

```yaml
# steps/navigation.yml
description: "Common navigation actions for web applications"
parameters:
  - BASE_URL
steps:
  - "Navigate to {{BASE_URL}}"
  - "Wait for page to load completely"
  - "Verify page title contains expected text"
  - "Check that navigation menu is visible"
  - "Ensure page is fully interactive"
```

### Authentication Steps

```yaml
# steps/authentication.yml
description: "User authentication with session management"
parameters:
  - BASE_URL
  - TEST_USERNAME
  - TEST_PASSWORD
steps:
  - "Navigate to {{BASE_URL}}/login"
  - "Check if user is already logged in"
  - "If not logged in, fill username field with {{TEST_USERNAME}}"
  - "Fill password field with {{TEST_PASSWORD}}"
  - "Click login submit button"
  - "Wait for login success indicator"
  - "Verify user is logged in successfully"
  - "Store session information for future use"
```

### Form Validation Steps

```yaml
# steps/form-validation.yml
description: "Common form validation patterns"
parameters:
  - TEST_EMAIL
  - TEST_PHONE
steps:
  - "Clear all form fields"
  - "Enter invalid email format and verify error message"
  - "Enter valid email {{TEST_EMAIL}} and verify no error"
  - "Enter invalid phone format and verify error message"
  - "Enter valid phone {{TEST_PHONE}} and verify no error"
  - "Test required field validation"
  - "Test character limits on text fields"
```

### API Testing Steps

```yaml
# steps/api-testing.yml
description: "Common API testing patterns"
parameters:
  - API_BASE_URL
  - API_TOKEN
steps:
  - "Set API base URL to {{API_BASE_URL}}"
  - "Set authorization header with {{API_TOKEN}}"
  - "Send GET request to /health endpoint"
  - "Verify response status is 200"
  - "Verify response contains expected health data"
  - "Check response time is under 500ms"
```

### Cleanup Steps

```yaml
# steps/cleanup.yml
description: "Test cleanup and reset actions"
parameters:
  - BASE_URL
steps:
  - "Clear browser cache and cookies"
  - "Close any open dialogs or modals"
  - "Reset form data to default state"
  - "Log out user if logged in"
  - "Navigate back to {{BASE_URL}}"
  - "Verify clean state for next test"
```

## Advanced Step Library Patterns

### Conditional Logic

```yaml
# steps/conditional-actions.yml
description: "Steps with conditional logic"
steps:
  - "If login modal is visible, then close it"
  - "If user is not logged in, then perform login"
  - "If shopping cart is empty, then add a test product"
  - "Otherwise, proceed with existing cart items"
```

### Error Handling

```yaml
# steps/error-handling.yml
description: "Robust error handling patterns"
steps:
  - "Attempt to click submit button"
  - "If error message appears, take screenshot and log error"
  - "If timeout occurs, retry action up to 3 times"
  - "If still failing, mark test as failed with detailed error"
```

### Data-Driven Steps

```yaml
# steps/data-driven.yml
description: "Steps that work with dynamic data"
parameters:
  - TEST_DATA_FILE
steps:
  - "Load test data from {{TEST_DATA_FILE}}"
  - "For each data row, perform the following actions"
  - "Fill form with current row data"
  - "Submit form and verify success"
  - "Reset form for next iteration"
```

## Best Practices

### 1. Single Responsibility

Each step library should focus on one specific area of functionality:

```yaml
# ✅ Good - Focused on login
# steps/login.yml
description: "User login functionality"
steps:
  - "Navigate to login page"
  - "Enter credentials"
  - "Submit login form"
  - "Verify login success"
```

```yaml
# ❌ Bad - Too many responsibilities
# steps/everything.yml
description: "All the things"
steps:
  - "Login user"
  - "Add product to cart"
  - "Process payment"
  - "Send email notification"
```

### 2. Descriptive Step Names

Write steps as clear, actionable descriptions:

```yaml
# ✅ Good - Clear and descriptive
steps:
  - "Click the 'Add to Cart' button"
  - "Verify product appears in shopping cart"
  - "Check that cart total is updated correctly"
```

```yaml
# ❌ Bad - Vague and unclear
steps:
  - "Do the thing"
  - "Check stuff"
  - "Verify it works"
```

### 3. Environment Variables

Always declare the environment variables your step library needs:

```yaml
# ✅ Good - Explicit parameters
description: "User registration flow"
parameters:
  - REGISTRATION_URL
  - TEST_EMAIL
  - TEST_PASSWORD
steps:
  - "Navigate to {{REGISTRATION_URL}}"
  - "Fill email field with {{TEST_EMAIL}}"
  - "Fill password field with {{TEST_PASSWORD}}"
```

### 4. Atomic Steps

Make each step atomic and focused:

```yaml
# ✅ Good - Each step does one thing
steps:
  - "Click login button"
  - "Wait for login form to appear"
  - "Fill username field"
  - "Fill password field"
  - "Submit form"
  - "Wait for dashboard to load"
```

```yaml
# ❌ Bad - Steps are too complex
steps:
  - "Click login button, wait for form, fill all fields, and submit"
```

## Using Step Libraries in Tests

To use a step library in your test cases, reference it with the `include` keyword:

```yaml
# test-cases/user-journey.yml
name: "Complete User Journey Test"
steps:
  - include: "navigation"      # Use navigation.yml
  - include: "authentication"  # Use authentication.yml
  - "Browse products"
  - include: "form-validation" # Use form-validation.yml
  - "Complete purchase"
  - include: "cleanup"         # Use cleanup.yml
```

## Validation

The framework validates your step libraries automatically. Common validation errors include:

### Missing Steps Array

```yaml
# ❌ This will fail validation
description: "Invalid step library"
parameters:
  - BASE_URL
# Missing steps array!
```

### Invalid Parameters

```yaml
# ❌ This will fail validation
description: "Invalid parameters"
parameters:
  - VALID_PARAM
  - 123  # Parameters must be strings
steps:
  - "Some step"
```

### Non-existent File Reference

```yaml
# In test-cases/my-test.yml
steps:
  - include: "non-existent-library"  # This file doesn't exist
```

## Debugging Step Libraries

### 1. Enable Debug Mode

```bash
DEBUG=true playwright-mcp-yaml-tester --test-case test-cases/my-test.yml
```

### 2. Validate Before Running

```bash
playwright-mcp-yaml-validator --all
```

### 3. Check Variable Interpolation

Ensure all variables are properly defined in your environment files:

```bash
# .env.dev
BASE_URL=https://dev.example.com
TEST_USERNAME=testuser
TEST_PASSWORD=testpass123
```

## Advanced Topics

### Custom Step Libraries

You can create domain-specific step libraries for your application:

```yaml
# steps/ecommerce-specific.yml
description: "E-commerce specific actions"
parameters:
  - STORE_URL
  - PRODUCT_ID
steps:
  - "Navigate to {{STORE_URL}}/product/{{PRODUCT_ID}}"
  - "Select product size and color"
  - "Add product to wishlist"
  - "Share product on social media"
  - "Check product availability"
```

### Parameterized Step Libraries

Create flexible step libraries that accept different parameters:

```yaml
# steps/flexible-navigation.yml
description: "Flexible navigation with multiple endpoints"
parameters:
  - BASE_URL
  - ENDPOINT
  - EXPECTED_TITLE
steps:
  - "Navigate to {{BASE_URL}}/{{ENDPOINT}}"
  - "Wait for page to load"
  - "Verify page title contains {{EXPECTED_TITLE}}"
```

## Next Steps

Now that you understand step libraries, learn how to combine them in [Test Cases](/test-cases) to create comprehensive test scenarios.

::: tip Pro Tip
Start with simple step libraries and gradually build more complex ones as you identify common patterns in your testing workflow.
:::

---

**Related Topics:**
- [Test Cases](/test-cases) - Learn how to use step libraries in test cases
<!--- [Environment Variables](/environment) - Understand variable interpolation
- [Best Practices](/reference/best-practices) - Follow recommended patterns-->