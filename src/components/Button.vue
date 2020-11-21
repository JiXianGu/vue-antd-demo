<template>
  <div class="button">
    <a-button disabled>disabled</a-button>
    <a-button ghost>ghost</a-button>
    <a-button htmlType="submit">submit</a-button>
    <a-button htmlType="reset">reset</a-button>
    <a-button htmlType="button">button</a-button>
    <br>
    <br>
    <a-button type="primary">Primary</a-button>
    <a-button type="dashed"> Dashed</a-button>
    <a-button type="link"> Link</a-button>
    <a-button type="primary" icon="left"> Go back </a-button>
    <a-button type="primary"><a-icon type="left" />Go back </a-button>
    <a-button :loading="btnLoading" @click="handleClick">loading</a-button>
    <br>
    <br>
    <a-button type="primary" shape="circle">circle</a-button>
    <a-button type="primary" shape="round">round</a-button>
    <a-button size="large">Larger</a-button>
    <a-button>default</a-button>
    <a-button size="small">small</a-button>
    <div style="width: 200px">
      <a-button block>block</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      btnLoading: false
    }
  },
  methods: {
    handleClick() {
      this.btnLoading = true
    }
  }
}
</script>

<style scoped lang="less">
.button {
  .ant-btn {
    margin-right: 10px;
  }
}
</style>
