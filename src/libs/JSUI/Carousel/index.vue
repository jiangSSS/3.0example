<template>
  <div @mouseenter="mouseenter" @mouseleave="mouseleave" class="container">
    <div class="inner">
      <car-dot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      ></car-dot>
      <car-director dir="prve" @dirClick="dirClick" />
      <car-director dir="next" @dirClick="dirClick" />
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from "vue";
import CarDot from "./Dot.vue";
import CarDirector from "./Director.vue"
export default {
  name: "Carousel",
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor: String,
  },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0,
    });
    let t = null;
    const autoplay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex("next");
        }, props.duration);
      }
    };
    const setIndex = (dir) => {
      switch (dir) {
        case "next":
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLen) state.currentIndex = 0;
          break;
        case "prve":
          state.currentIndex -= 1;
          if (state.currentIndex === -1) state.currentIndex = state.itemLen - 1;
          break;
        default:
          break;
      }
    };
    const dotClick = (index) => {
      state.currentIndex = index;
    };
    const mouseenter = ()=>{
      clearInterval(t)
      t = null
    }
    const mouseleave = ()=>{
      autoplay()
    }
    const dirClick = dir=>{
      setIndex(dir)
    }
    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length;
      autoplay();
    });
    onBeforeUnmount(() => {
      clearInterval(t);
      t = null;
    });
    return {
      ...toRefs(state),
      setIndex,
      dotClick,
      mouseenter,
      mouseleave,
      dirClick
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>