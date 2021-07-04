<template>
  <div class="dot-wrapper" v-if="hasDot">
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{
          backgroundColor: item - 1 === currentIndex ? dotBgColor : '#fff',
        }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CarDot",
  props: {
    itemLen: Number,
    currentIndex: Number,
    hasDot: {
      type: Boolean,
      default: true,
    },
    dotBgColor: {
      type: String,
      default: "#ff5000",
    },
  },
  setup(props, ctx) {
    const dotClick = (index) => {
      ctx.emit("dotClick", index);
    };
    return {
      dotClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.dot-wrapper {
  width: 2rem;
  height: 0.2rem;
  border-radius: 10px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  text-align: center;
  font-size: 0%;
  z-index: 1;
  margin-left: -1rem;
  background: rgba(255, 255, 255, 0.3);
  .dot-item {
    display: inline-block;
    margin: 0.05rem;
    .dot-lk {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background: #fff;
    }
  }
}
</style>