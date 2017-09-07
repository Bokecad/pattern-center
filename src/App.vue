<template>
  <div id="app">
    <router-view></router-view>
    <personal-header></personal-header>
  </div>
</template>

<script>
//var imgUrl = require('@/assets/logo.png')
import PersonalHeader from '@/components/PersonalHeader'


export default {
  name: 'app',
  data(){
    return {
    }
  },
  components:{
    PersonalHeader
  }
}
</script>

<style lang="less">

@import url('pages/style/common.less');



#app {
  .wrap1{width:1280px;}
  .wrap2{width:1200px;}
  background: @bg-body;
}

</style>
