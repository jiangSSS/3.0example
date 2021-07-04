<template>
  <sub-menu>
    <template #title>{{ data.value }}</template>
    <template v-for="c of data.children" :key="c.id">
      <menu-item v-if="!c.children">{{ c.value }}</menu-item>
      <re-sub-menu v-else :key="c.id" :data="c"></re-sub-menu>
    </template>
  </sub-menu>
</template>
<script>
export default {
  name: "ReSubMenu",
  props: {
    data: Object,
  },
};
</script>
<style lang="scss" scoped>
</style>