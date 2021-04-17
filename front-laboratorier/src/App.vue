<template>
  <div id="app">
    
      <div class="head-nav"><head-nav/></div>

      <div class="content">   
        
        <main-nav class="main-nav"/>
        <div class="main-content" ref="content"><router-view/></div>
      </div>
      
      <footer></footer>
  </div>
</template>

<script>
import MainNav from 'components/content/MainNav.vue'
import HeadNav from './components/content/HeadNav.vue'



export default {
  name: 'App',
  components: { 
    MainNav,
    HeadNav
  
  },
  methods:{
    toggleStyle(value){
      if(value === "15px"){
        this.$refs.content.style.width = "95%"
      }else{
        this.$refs.content.style.width = "80%"
      }
      this.$refs.content.style.left = value;
    }
  },
  
  mounted(){
    this.$bus.$on('toggleNav',res=>{
      this.toggleStyle(res);
    })



    
  }
    
}
</script>

<style scoped>
  @import "./assets/css/base.css";

  .content {
    display: flex;
    width: 100%;
    position: relative;
    top: 56px;
  }
  .head-nav{
    position: fixed;
    top: 0px;
    background:white;
    z-index: 1;
  }
 
 .main-nav{
    position: fixed;
    left: 0px;
    top: 56px;
  }
  .main-content{
    width: 80%;
    padding: 30px;
    min-width: 1000px;
    position: absolute;
    left: 215px;
  }


</style>