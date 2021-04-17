<template>
  <div>
    <div>物资</div>
  </div>
</template>

<script>
  import {getAccount,getHygiene,getMaterials} from 'network/reqData'
  export default {
    
    mounted(){
      getMaterials().then(res=>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>