module.exports = {
  title: '旺仔小前端',
  description: '再看，再看我就把我卡掉',
  head: [
    ['link', { rel: 'icon', href: '/0.png' }],
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    smoothScroll: true, // 启动页面滚动
    logo: '/0.png',
    nav:[
      { text: 'Home', link: '/'},
      { text: 'vue', link: '/pages/vue/' }, // 内部链接 以docs为根目录
      { text: 'react', link: '/pages/react/'},
      { text: 'guide', link: '/pages/guide/'},
      { text: 'java', link: '/pages/java/'},
      { text: 'GitHub', link: 'https://github.com/imlinhe'}  
    ],
    sidebar: {
      '/pages/vue/': [
        {
          title: 'vue',
          collapsable: true,
          children: [
            ['abc', 'abc'],
          ],
        },
        {
          title: '响应式原理1',
          collapsable: true,
          children: [
            ['abc', 'abc'],
          ],
        },
      ],
      '/pages/react/': [
        {
          title: 'react',
          collapsable: true,
          children: [
            ['hooks', 'hooks'],
          ]
        }
      ],
      // '/pages/abstract/': abstractSideBar
    }
  }
}