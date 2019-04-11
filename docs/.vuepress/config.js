module.exports = {
  plugins: [
    '@vuepress/blog',
    '@vuepress/last-updated',
  ],
  serviceWorker: false,
  theme: '@vuepress/theme-default',
  themeConfig: {
    sidebar: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Category', link: '/category/' },
      { text: 'Tag', link: '/tag/' }
    ]
  },
  title: undefined,
  base: '/'
}
