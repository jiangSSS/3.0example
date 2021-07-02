<template>
  <router-view />
  <nav-bottom />
</template>
<script>
import NavBottom from "./components/NavBottom.vue";
export default {
  components: {
    NavBottom,
  },
};
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>
