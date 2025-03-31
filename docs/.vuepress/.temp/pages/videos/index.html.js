import comp from "/Users/mac/IdeaProjects/own/tanga/docs/.vuepress/.temp/pages/videos/index.html.vue"
const data = JSON.parse("{\"path\":\"/videos/\",\"title\":\"视频课程\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"课程列表\",\"slug\":\"课程列表\",\"link\":\"#课程列表\",\"children\":[{\"level\":3,\"title\":\"基础课程\",\"slug\":\"基础课程\",\"link\":\"#基础课程\",\"children\":[]}]},{\"level\":2,\"title\":\"学习建议\",\"slug\":\"学习建议\",\"link\":\"#学习建议\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"videos/README.md\"}")
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
