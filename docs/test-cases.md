## Test Cases

Test cases define individual test scenarios by combining step libraries and custom steps.

### Test Case Syntax

```yaml
name: "Test Case Name"
description: "Detailed description of what this test validates"
tags:                    # Optional: Tags for categorization and filtering
  - tag1
  - tag2
environment_variables:  # Optional: Required environment variables
  - VARIABLE_NAME
  - ANOTHER_VARIABLE
steps:
  - include: "step-library-name"    # Include entire step library
  - "Custom step description"       # Individual step
  - include: "another-library"      # Include another library
```

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
#### Add Product to Cart Test (`test-cases/add-product-to-cart.yml`)
```yaml
name: "Add Product to Cart Test"
description: "Test adding a product to the shopping cart"
tags:
  - smoke
  - cart
  - add-to-cart
  - critical
environment_variables:
  - BASE_URL
  - TEST_USERNAME
  - TEST_PASSWORD
steps:
  - include: "navigation"
  - include: "login"
  - "Verify user dashboard is displayed"
  - "Select a product from the catalog"
  - "Add the selected product to the cart" 
  - "Verify product is added to the cart"
  - "Verify cart count is updated"
  - "Verify cart details are correct"
  - include: "cleanup"
```