<template>
  <div class="about">
    <div class="side-bar">
      <tree-menu>
        <template v-for="item of menuData">
          <menu-item v-if="!item.children" :key="item.id">{{ item.value }}</menu-item>
          <re-sub-menu :key="item.id" :data="item" v-else></re-sub-menu>
        </template>
      </tree-menu>
    </div>
  </div>
</template>
<script>
import menuData from "../data/menuData";
export default {
  name: "menu",
  setup() {
    return {
      menuData,
    };
  },
};
</script>
<style lang="scss" scoped>
.side-bar {
  width: 5rem;
  background: #000;
  font-size: 0.5rem;
}
</style>
