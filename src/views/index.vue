<template>
  <div>
    <test />
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/test.vue";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  watchEffect,
  watch
} from "vue";

export default {
  name: "Home",
  components: {
    Test,
  },
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount");
    }),
      onMounted(() => {
        console.log("onMounted");
      }),
      onBeforeUpdate(() => {
        console.log("onBeforeUpdate");
      }),
      onUpdated(() => {
        console.log("onUpdated");
      }),
      onBeforeUnmount(() => {
        console.log("onBeforeUnmount");
      }),
      onUnmounted(() => {
        console.log("onUnmounted");
      }),
      onErrorCaptured(() => {
        console.log("onErrorCaptured");
      });
      watchEffect(()=>{

      }),
      watch(()=>{
        
      })
  },
};
</script>
