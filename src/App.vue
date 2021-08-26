<template>
  <div id="app">
    <h1 class="toutiao toutiao-dianzan2">黑马头条</h1>
    <i class="toutiao toutiao-yuedu"></i>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
.toutiao-yuedu{
  color: pink;
}
</style>
