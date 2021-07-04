<template>
  <div class="container">
    <carousel
      :autoplay="true"
      :duration="3000"
      :initial="2"
      :hasDot="true"
      :hasDirector="true"
      dotBgColor="#f00"
    >
      <car-item v-for="(item, index) of data" :key="index">
        <img :src="require(`../assets/img/${item.img_name}`)" alt="" />
      </car-item>
    </carousel>
  </div>
</template>
<script>
import data from "../data/carousel";
export default {
  setup() {
    return {
      data,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 600px;
  height: 300px;
  margin: 100px auto;
}
</style>