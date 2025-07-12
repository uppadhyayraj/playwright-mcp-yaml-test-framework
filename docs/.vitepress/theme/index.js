// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Custom app enhancements
    
    // Add global components
    // app.component('CustomBadge', CustomBadge)
    
    // Add global properties
    app.config.globalProperties.$utils = {
      formatDate: (date) => {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
    }
    
    // Router hooks
    router.onAfterRouteChanged = (to) => {
      // Google Analytics or other tracking
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: to
        })
      }
    }
  }
}