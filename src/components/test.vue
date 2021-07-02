<template>
  <div>
    <h1>这是一个组件</h1>
    <div>我的年龄是{{ age }}</div>
    <div>我的ID是{{ id }}</div>
    <div>我的新ID是{{ newId }}</div>
    <button @click="handleClick()">增加</button>
  </div>
</template>
<script>
import { ref, reactive, toRefs, computed,onMounted } from "vue";
export default {
  setup() {
    let age = ref(18);
    let person = reactive({
      id: 100,
      newId: computed(() => person.id + 2),
    });
    let handleClick = () => {
      age.value = ++age.value;
      person.id = ++person.id;
    };
    onMounted(()=>{
      handleClick()
    })
    return {
      age,
      handleClick,
      ...toRefs(person),
    };
  },
};
</script>