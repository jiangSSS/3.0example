<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
  >
    <a
      :href="link"
      :target="blank ? _blank : ''"
      class="mag-wrap"
      :style="{ width: magWidth + 'px', height: magHeight + 'px' }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{ width: imgWidth + 'px', height: imgheight + 'px' }"
      />
    </a>
    <a class="img-lk" :href="link">
      <img class="static-img" :src="imgUrl" :alt="imgAlt" />
    </a>
  </div>
</template>
<script>
import { magnifier } from "../../../directives";
export default {
  name: "Magnifier",
  directives: {
    magnifier,
  },
  props: {
    imgWidth: {
      type: Number,
      default: 375,
    },
    imgHeight: {
      type: Number,
      default: 500,
    },
    magWidth: {
      type: Number,
      default: 150,
    },
    magHeight: {
      type: Number,
      default: 150,
    },
    imgUrl: String,
    imgAlt: String,
    link: String,
    blank: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.img-wrap {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;
  margin: 0 auto;
  .static-img {
    width: 100%;
  }
  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 3px #000;
    cursor: move;
    border-radius: 50%;
    overflow: hidden;
    //  transform: scale(1.5);
    &.show {
      display: block;
      transform: scale(1.5);
    }
    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>