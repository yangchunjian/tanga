import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '视频教学',
  description: '一个简洁的视频教学网站',
  
  bundler: webpackBundler(),
  
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '视频课程',
        link: '/videos/',
      },
    ],
    sidebar: {
      '/videos/': [
        {
          text: '视频课程',
          children: [
            '/videos/README.md',
            '/videos/course1.md',
            '/videos/course2.md',
          ],
        },
      ],
    },
  }),
}) 