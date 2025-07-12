## Troubleshooting

### Common Issues

1. **Step Library Not Found**
   - Verify the step library file exists in `steps/` directory
   - Check spelling and file extension

2. **Environment Variable Not Resolved**
   - Ensure variable is defined in appropriate `.env` file
   - Check variable name spelling and case sensitivity

3. **Test Case Validation Errors**
   - Run validation before test execution
   - Check required fields are present
   - Verify file paths and references

4. **Gemini Execution Failures**
   - Ensure Gemini CLI is installed and configured
   - Check Playwright MCP server is running
   - Verify network connectivity and permissions

### Debug Mode

Enable detailed logging by setting environment variables:

```bash
DEBUG=true node test-runner.js --test-case test-cases/user-login.yml
```
