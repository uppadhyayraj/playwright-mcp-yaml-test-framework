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