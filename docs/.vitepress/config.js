export default {
  title: 'Test Framework Documentation',
  description: 'YAML-based test automation framework with Playwright MCP',
  base: '/test-framework-docs/',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' },
      { text: 'Examples', link: '/examples/basic-setup' },
      { text: 'API Reference', link: '/api/' }
    ],
    
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Overview', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Installation', link: '/installation' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Step Libraries', link: '/step-libraries' },
            { text: 'Test Cases', link: '/test-cases' },
            { text: 'Test Suites', link: '/test-suites' },
            { text: 'Environment Variables', link: '/environment' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Basic Setup', link: '/examples/basic-setup' },
            { text: 'Advanced Usage', link: '/examples/advanced-usage' },
            { text: 'CI/CD Integration', link: '/examples/cicd' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'YAML Validation', link: '/reference/validation' },
            { text: 'Troubleshooting', link: '/reference/troubleshooting' },
            { text: 'Best Practices', link: '/reference/best-practices' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/test-framework-docs' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Your Name'
    },
    
    editLink: {
      pattern: 'https://github.com/yourusername/test-framework-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}