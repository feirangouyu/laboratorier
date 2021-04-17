<template>
  <div class="header" ref="head">
    <div class="user-num">全体成员列表({{ userNum }})</div>

    <div class="user-search"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    userNum: Number,
   
  },
  mounted(){
    this.$bus.$on("toggleNav",res=>{
      if(res === "15px"){
        this.$refs.head.style.width = "130%"
      }else{
        this.$refs.head.style.width = "100%"
      }
    })
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  
  height: 70px;

  position: fixed;
  top: 57px;
  
  align-items: center;


  display: flex;
  background: white;
  z-index: 1;
}
.header .user-num {
  /* flex-grow: 1; */
  flex: 1;
}

.header .user-search {
flex: 1;
  margin-left: 250px;
}


</style>