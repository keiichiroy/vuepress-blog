module.exports = {
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
