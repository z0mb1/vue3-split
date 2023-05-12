import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue3 Split",
  description: "Vue3 wrapper for Split.js",
  base: "/vue3-split/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Get started', link: '/get-started' },
          { text: 'Configure', link: '/configure' },
          { text: 'Styles', link: '/styles' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Directions', link: '/example-directions' },
          { text: 'Sizes', link: '/example-sizes' },
          { text: 'Nested', link: '/example-nested' },
          { text: 'Collapse', link: '/example-collapse' },
        ]
      },
      {
        text: 'SplitJS',
        link: 'https://github.com/nathancahill/split/tree/master',
        target: '_self',
      }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get started', link: '/get-started' },
          { text: 'Configure', link: '/configure' },
          { text: 'Styles', link: '/styles' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Directions', link: '/example-directions' },
          { text: 'Sizes', link: '/example-sizes' },
          { text: 'Nested', link: '/example-nested' },
          { text: 'Collapse', link: '/example-collapse' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z0mb1/vue-split' }
    ]
  },
})
