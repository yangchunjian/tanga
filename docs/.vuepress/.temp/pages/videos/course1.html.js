import comp from "/Users/mac/IdeaProjects/own/tanga/docs/.vuepress/.temp/pages/videos/course1.html.vue"
const data = JSON.parse("{\"path\":\"/videos/course1.html\",\"title\":\"课程一：入门基础\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"课程简介\",\"slug\":\"课程简介\",\"link\":\"#课程简介\",\"children\":[]},{\"level\":2,\"title\":\"课程内容\",\"slug\":\"课程内容\",\"link\":\"#课程内容\",\"children\":[{\"level\":3,\"title\":\"第一课：基础知识\",\"slug\":\"第一课-基础知识\",\"link\":\"#第一课-基础知识\",\"children\":[]},{\"level\":3,\"title\":\"第二课：实践操作\",\"slug\":\"第二课-实践操作\",\"link\":\"#第二课-实践操作\",\"children\":[]}]},{\"level\":2,\"title\":\"课后练习\",\"slug\":\"课后练习\",\"link\":\"#课后练习\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"videos/course1.md\"}")
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
