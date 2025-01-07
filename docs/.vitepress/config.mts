import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阿康自留地",
  description: "个人兴趣",
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    logo: {
      light: './logo.png',
      dark: './logo-dark.png',
      alt: 'logo',
    },
    siteTitle: false,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/navigation/index' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/svvkcn/vitePress_svvkCn' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    outline: {
      label: '页面导航',
      level: 'deep'
    },

    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    lastUpdated: {
      text: '更新于：',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    footer: {
      message: '除非特别声明，否则均<b>不</b>代表站方观点，并仅供查阅，不作为任何参考依据！',
      copyright: 'Copyright © 2025-present <a target="_blank" href="https://beian.miit.gov.cn/">冀ICP备2023005584号-1</a> </br> <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13052802000663" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" style="float:left; width: 20px; height: 20px;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">冀公网安备 13052802000663号</p></a>'
    }
  },
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
