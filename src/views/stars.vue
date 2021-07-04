<template>
  <div class="box">
    <Stars :num="num" :size="size" @getStarsNum="getStarsNum" />
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  name: "",
  setup() {
    const state = reactive({
      num: 4,
      size: 40,
    });
    const getStarsNum = (num) => {
      console.log(num);
    };
    return {
      ...toRefs(state),
      getStarsNum,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>