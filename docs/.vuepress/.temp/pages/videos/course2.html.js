import comp from "/Users/mac/IdeaProjects/own/tanga/docs/.vuepress/.temp/pages/videos/course2.html.vue"
const data = JSON.parse("{\"path\":\"/videos/course2.html\",\"title\":\"课程二：进阶技巧\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"课程简介\",\"slug\":\"课程简介\",\"link\":\"#课程简介\",\"children\":[]},{\"level\":2,\"title\":\"课程内容\",\"slug\":\"课程内容\",\"link\":\"#课程内容\",\"children\":[{\"level\":3,\"title\":\"第一课：高级概念\",\"slug\":\"第一课-高级概念\",\"link\":\"#第一课-高级概念\",\"children\":[]},{\"level\":3,\"title\":\"第二课：实战演练\",\"slug\":\"第二课-实战演练\",\"link\":\"#第二课-实战演练\",\"children\":[]}]},{\"level\":2,\"title\":\"课后练习\",\"slug\":\"课后练习\",\"link\":\"#课后练习\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"videos/course2.md\"}")
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
