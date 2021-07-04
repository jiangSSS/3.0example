<template>
  <div class="container">
    <div class="box">
      <div
        class="item"
        v-for="(item, index) in itemList"
        :key="index"
        @click="handleClick(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let itemList = reactive([
      {
        name: "001",
        id: "1",
      },
      {
        name: "002",
        id: "2",
      },
      {
        name: "003",
        id: "3",
      },
    ]);
    const router = useRouter();
    let handleClick = (e) => {
      switch (e) {
        case "1":
          router.push("/");
          break;
        case "2":
          router.push("/about");
          break;
        case "3":
          router.push("/me");
          break;
        default:
          break;
      }
    };
    return {
      itemList,
      handleClick    
    };
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.box {
  display: flex;
  background: #f00;
}
.container .box .item {
  flex: 1;
  padding: 0.5rem 0;
  color: #fff;
  background: #409eff;
  text-align: center;
  cursor: pointer;
  box-shadow: 5px 5px 12px 0px #ccc;
}
.container .box .item:hover{
  color: #f00;
}
.container .box .item:active {
  color: #ccc;
  background: #f00;
}

</style>