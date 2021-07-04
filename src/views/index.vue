<template>
  <div>
    <test />
    <button @click="toMenu()">查看菜单</button>
    <button @click="toSwiper()">查看轮播</button>
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
  watch,
} from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Home",
  components: {
    Test,
  },
  setup() {
    const router = useRouter();
    const toMenu = () => {
      router.push("/menu");
    };
    const toSwiper = ()=>{
      router.push("/swiper")
    }
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
    watchEffect(() => {}), watch(() => {});
    return {
      toMenu,
      toSwiper
    };
  },
};
</script>
