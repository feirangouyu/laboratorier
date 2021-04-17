<template>
  <div  class="nav-item" >

      <div class="icon" v-if="isActive"><slot name="nav-icon-active"></slot></div>
      <div v-else><slot name="nav-icon"></slot></div>
      
      <div class="text"  :style="activeStyle" @click="itemClick"><slot name="nav-text"></slot></div>

  </div>
</template>

<script>
  export default {
    props:{
      path:{
        type:String,
        default:null
      },
      activeColor:{
        type:String,
        default:"#409eff"
      },
    },
    methods:{
      itemClick(){
        if (this.$route.path !== this.path && this.path != null) {
          this.$router.replace(this.path);
        } 
      },

    },
    computed:{
      isActive(){
        return this.$route.path.includes(this.path);
      },

      activeStyle(){
        return this.isActive?{color:this.activeColor}:{};
      }
    }
  }
</script>

<style scoped>
 
  .nav-item{
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
  }
  .text{
      width: 80px;
      height: 30px;
      /* text-align: center; */
      margin-left: 10px;
      line-height: 30px;
      font-size: 18px;
      flex: 1;
      color: #413e3e;
;
  }

  .text:hover{
    color: #409eff;
  }
</style>