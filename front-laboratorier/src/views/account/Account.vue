<template>
  <div class="account">

    <acco-nav></acco-nav>
    <router-view/>
    
  </div>
</template>

<script>
import AccoNav from "./childComps/AccoNav"
export default {
  name: "Account",
  components: { 
    AccoNav
  },
  data() {
    return {
      
    }
    
  },
  created() {

  }
}
</script>

<style scoped>

</style>