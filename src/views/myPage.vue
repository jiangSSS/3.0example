<template>
  <div>
    <div class="row">
      <div class="left">
        <span v-for="(item, index) in data" :key="index">{{ item }}</span>
      </div>
      <div class="right">
        <button @click="reset()">按钮1</button>
        <button>按钮2</button>
      </div>
      {{ id }}{{ name }}
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = ["第一项", "第二项", "第三项", "第四项"];
    let model = reactive({
      id: 1,
      name: "jiang",
    });
    let reset = () => {
      for (let i in model) {
        model[i] = "";
      }
    };
    return {
      data,
      reset,
      ...toRefs(model),
    };
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  .left {
    background: #f00;
  }
}
</style>