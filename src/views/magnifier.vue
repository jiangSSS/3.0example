<template>
  <div class="wrapper">
    <magnifier
      :link="link"
      :blank="true"
      :imgUrl="imgUrl"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
      :imgAlt="imgAlt"
    ></magnifier>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  name: "",
  setup() {
    const state = reactive({
      imgUrl: require("../assets/img/m1.webp"),
      imgAlt: "裴秀智",
      blank: true,
      link: "https://www.jd.com",
      imgWidth: 375,
      imgHeight: 240,
      magWidth: 200,
      magHeight: 200,
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 100px auto;
}
</style>