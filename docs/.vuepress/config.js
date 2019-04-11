module.exports = {
  plugins: [
    '@vuepress/blog',
    '@vuepress/last-updated',
  ],
  dest: 'vuepress',
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
    ]
  },
  title: undefined,
  base: '/'
}
