<template>
  <div id="app">
    <!-- Button -->
    <Button></Button>
    <!-- Row -->
    <Row></Row>
    <!-- Input -->
    <Input/>
    <!-- affix -->
    <div style="margin-top: 100px"></div>
    <a-affix :offsetTop="100">top</a-affix>
    <a-affix :offsetBottom="700">bottom</a-affix>
    <!-- 面包屑 -->
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>About</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Row from './components/Row.vue'
import Input from './components/Input.vue'

export default {
  name: 'App',
  components: {
    Button,
    Row,
    Input
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;  
  height: 10000px;
  color: #2c3e50;
  background: #a2a2a2;
  width: 100%;
  height: 1000%;
}
</style>
