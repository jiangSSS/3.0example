import {reactive} from "vue"
class remPlugin {
  install = function (Vue) {
    const rem = Vue.rem = reactive({base:0})
    Vue.mixin({
      methods: {
        onresize() {
          let { width, height } = window.screen;
          let target = width
          if (width > height) target = height
          let remBase = target / 18.75
          remBase = remBase - (remBase % 2)
          document.documentElement.setAttribute(
            'style',
            `font-size: ${remBase}px !important`
          )
          rem.base = remBase
        }
      },
      created() {
        window.onorientationchange = window.onresize = this.onresize
        this.onresize()
      },
    })
  }
}
export default new remPlugin()