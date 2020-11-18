<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <a-button type="primary">Button</a-button> -->
    <a-input placeholder="Basic usage" allowClear />
    <a-select default-value="lucky" allowClear>
      <!-- <a-select-option value="lucy" :key="'lucky'">lucy</a-select-option> -->
    </a-select>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
