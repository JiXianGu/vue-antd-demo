<template>
  <div>
    <a-input placeholder="请输入" :value="name"></a-input>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data() {
      return {
        name: ''
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>