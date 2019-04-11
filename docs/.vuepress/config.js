module.exports = {
  plugins: ['@vuepress/blog'],
  title: "My Vuepress Docs",
  theme: "@vuepress/theme-default",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/': [
        '',
        ''
      ],
      '/about/': []
    }
  }
}
