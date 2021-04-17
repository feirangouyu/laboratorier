<template>
  <div>
    <div>卫生表</div>
  </div>
</template>

<script>

  import { getHygiene } from 'network/reqData'
  export default {
    mounted(){
      
      getHygiene().then(res=>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>