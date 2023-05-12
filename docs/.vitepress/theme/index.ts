// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.config.unwrapInjectedRef = true
  }
}
