<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
  </div>
  <div class="director dir-prve" v-if="dir === 'prve'">
    <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
  </div>
</template>
<script>
export default {
  name: "Director",
  props: {
    dir: String,
  },
  setup(props, ctx) {
    const dirClick = (dir) => {
      ctx.emit("dirClick", dir);
    };
    return {
      dirClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -0.8rem;
  width: 0.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.4rem;
  a {
    color: #fff;
    text-decoration: none;
  }
  &.dir-next{
    right: 0;
  }
  &.dir-prve{
    left: 0;
  }
}
</style>