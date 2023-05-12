// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import '@mdi/font/css/materialdesignicons.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.config.unwrapInjectedRef = true
  },
}
