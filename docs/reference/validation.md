## YAML Validation

The framework includes a validation utility to ensure YAML files are properly structured.

### Validation Rules

#### Step Libraries
- Must have `steps` array
- Parameters must be strings (if present)
- File must exist in `steps/` directory

#### Test Cases
- **Required fields**: `name`, `steps`
- **Optional fields**: `description`, `tags`, `environment_variables`
- `tags` must be an array (if present)
- `steps` must be an array
- Referenced step libraries must exist

#### Test Suites
- **Required fields**: `name`, `test-cases`
- **Optional fields**: `description`, `tags`, `environment`
- `test-cases` must be an array
- Referenced test case files must exist

### Running Validation

```bash
# Validate specific test case
playwright-mcp-yaml-validator --test-case test-cases/user-login.yml

# Validate specific test suite
playwright-mcp-yaml-validator --test-suite test-suites/smoke-tests.yml

# Validate all files
playwright-mcp-yaml-validator --all
```

### Validation Output

```bash
✅ All validations passed!

# Or if errors exist:
❌ Validation Errors:
  test-cases/user-login.yml: Missing required field 'name'
  test-cases/user-login.yml: Step 1 references non-existent library 'nonexistent'
```