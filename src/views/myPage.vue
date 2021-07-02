<template>
  <div>
    <div class="row">
      <div class="left">
        <span v-for="(item,index) in data" :key="index">{{item}}</span>
      </div>
      <div class="right">
        <button>按钮1</button>
        <button>按钮2</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(){
    const data = ["第一项","第二项","第三项","第四项"];
    return {
      data
    }
  }
}
</script>
<style scoped>
.row{
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}
</style>