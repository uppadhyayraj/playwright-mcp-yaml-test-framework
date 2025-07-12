## Environment Variables

The framework supports environment-specific configuration through `.env` files.

### Environment File Structure
Create environment files for your environments as given below and let's use a Sample Website [SauceLab](https://www.saucedemo.com/) for runing the tests. Please update the details in env file as per details given on the website.
```bash
# .env.dev
BASE_URL=https://dev.example.com #Replace this with above link
TEST_USERNAME=testuser #replace with details given on above website
TEST_PASSWORD=testpass123 #replace with details given on above website

# .env.staging
BASE_URL=https://staging.example.com
TEST_USERNAME=staginguser
TEST_PASSWORD=stagingpass456
```

### Variable Interpolation

Use `{{VARIABLE_NAME}}` syntax in step descriptions to inject environment variables:

```yaml
steps:
  - "Navigate to {{BASE_URL}}/login"
  - "Enter username: {{TEST_USERNAME}}"
```