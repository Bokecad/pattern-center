<template>
  <div class="hello">
    <sample></sample>
    <navi-top></navi-top>
    <personal-header></personal-header>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import Sample from '@/components/sample.vue';
import NaviTop from '@/components/NaviTop.vue';
import PersonalHeader from '@/components/PersonalHeader.vue';


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapGetters(['url','test']),
  },
  methods:{
    //...mapActions(['ADD_TEST'])
  },
  created(){
    axios.get(`${this.url}api`)
      .then(res => {
        console.log(res)
      })
      .then(err => {
        console.log('error',err)
      })

    
  },
  components: {
<<<<<<< HEAD
    Sample,RegHome
=======
    Sample,
    PersonalHeader,
    NaviTop
>>>>>>> origin/feature-m
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
