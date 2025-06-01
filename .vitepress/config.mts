import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QGIProject",
  description: "A Doc for QGIGroup",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '教程导览', link: '/tutorial/menu' },
      { text: '语录合集', link: '/QGI/menu' },
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: '目录', link: '/tutorial/menu' },
        ]
      },
      {
        text: '语录合集',
        items: [
          { text: '目录', link: '/QGI/menu' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QGIProject/docs' }
    ],
  }
})