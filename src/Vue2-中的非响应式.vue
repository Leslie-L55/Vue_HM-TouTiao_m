<template>
  <div id="app">
    age: {{ obj.age }}
    <button @click="handleClick">click</button>
    arr: {{ arr[0] }}
    <button @click="handleClick2">click2</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      obj: {},
      arr: []
    }
  },
  methods: {
    handleClick() {
      // 这种不行
      // this.obj.age = 18
      // console.log(this.obj.age)
      // 解决方法 1
      // this.obj = { age: 18 }
      // 修改谁，修改属性，修改成什么
      // 解决方法 2
      this.$set(this.obj, 'age', 18)
      // 解决方法 3
      // Vue.set(this.obj, 'age', 18)
    },
    handleClick2() {
      // this.arr[0] = 888
      this.$set(this.arr, 0, 888)
    }
  }
}
</script>