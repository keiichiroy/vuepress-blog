module.exports = {
  plugins: [
    '@vuepress/blog',
    '@vuepress/last-updated',
  ],
  serviceWorker: false,
  themeConfig: {
    sidebar: [
      '/',
      '/page1',
      '/page2',
      [
        '/page3',
        'Custom link page'
      ]
    ],
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
