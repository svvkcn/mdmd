import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { text: '导航', link: '/navigation/index' }
]

const sidebar: DefaultTheme.Config['sidebar'] = {}

export default {
    nav,
    sidebar
}