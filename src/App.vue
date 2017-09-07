<template>
  <div id="app">
    <img v-lazy="imgUrl">
    <router-view></router-view>
  </div>
</template>

<script>
//var imgUrl = require('@/assets/logo.png')
export default {
  name: 'app',
  data(){
    return {
      imgUrl: require('@/assets/logo.png')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
