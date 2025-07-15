// docs/.vitepress/config.js
export default {
  title: 'Democratize Quality',
  description: 'YAML-based test automation framework with Playwright MCP integration',
  base: '/playwright-mcp-yaml-test-framework/', // Replace with your actual repo name
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Test Framework Documentation' }],
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' },
      { 
        text: 'Examples', 
        items: [
          { text: 'Basic Setup', link: '/examples/basic-setup' },
          { text: 'Advanced Usage', link: '/examples/advanced-usage' },
          { text: 'CI/CD Integration', link: '/examples/cicd' }
        ]
      },
      { text: 'Reference', link: '/reference/troubleshooting' }
    ],
    
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Installation', link: '/installation' },
            { text: 'Quick Start', link: '/quick-start' }
          ]
        },
        {
          text: 'Core Concepts',
          collapsed: false,
          items: [
            { text: 'Architecture', link: '/architecture' },
            { text: 'Step Libraries', link: '/step-libraries' },
            { text: 'Test Cases', link: '/test-cases' },
            { text: 'Test Suites', link: '/test-suites' },
            { text: 'Environment Variables', link: '/environment' }
          ]
        },
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Basic Setup', link: '/examples/basic-setup' },
            { text: 'Login Tests', link: '/examples/login-tests' },
            { text: 'E-commerce Tests', link: '/examples/ecommerce-tests' },
            { text: 'Advanced Usage', link: '/examples/advanced-usage' },
            { text: 'CI/CD Integration', link: '/examples/cicd' }
          ]
        },
        {
          text: 'Reference',
          collapsed: false,
          items: [
            { text: 'YAML Validation', link: '/reference/validation' },
            { text: 'Command Line', link: '/reference/cli' },
            { text: 'Best Practices', link: '/reference/best-practices' },
            { text: 'Troubleshooting', link: '/reference/troubleshooting' },
            { text: 'FAQ', link: '/reference/faq' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/uppadhyayraj/playwright-mcp-yaml-test-framework' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Test Framework Documentation'
    },
    
    editLink: {
      pattern: 'https://github.com/uppadhyayraj/playwright-mcp-yaml-test-framework/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    search: {
      provider: 'local'
    },
    
    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  },
  
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    container: {
      tipLabel: '💡 Tip',
      warningLabel: '⚠️ Warning',
      dangerLabel: '🚨 Danger',
      infoLabel: 'ℹ️ Info',
      detailsLabel: 'Details'
    }
  },
  
  sitemap: {
    hostname: 'https://uppadhyayraj.github.io/playwright-mcp-yaml-test-framework'
  }
}