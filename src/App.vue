<template>
  <div id="app">
    <h1 class="toutiao toutiao-dianzan2">黑马头条</h1>
    <i class="toutiao toutiao-yuedu"></i>
    <hr />
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <div class="box">测试postcss</div>
    <router-view />
  </div>
</template>

<script>
import { getJoke } from '@/api/news'
export default {
  name: 'App',
  async created () {
    const res = await getJoke()
    console.log(res)
  }
}
</script>

<style scoped lang="less">
.toutiao-yuedu {
  color: pink;
}
.box {
  width: 750px;
  height: 200px;
  background: skyblue;
  text-align: center;
  line-height: 200px;
}
</style>
