import comp from "/Users/mac/IdeaProjects/own/tanga/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/hero.png\",\"heroText\":\"视频教学\",\"tagline\":\"简单、直观的视频学习平台\",\"actions\":[{\"text\":\"开始学习 →\",\"link\":\"/videos/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"精选课程\",\"details\":\"精心挑选的高质量视频课程，涵盖多个领域\"},{\"title\":\"清晰结构\",\"details\":\"课程内容结构清晰，循序渐进\"},{\"title\":\"随时学习\",\"details\":\"随时随地，想学就学\"}],\"footer\":\"Copyright © 2024 视频教学\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
