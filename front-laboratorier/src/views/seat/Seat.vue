<template>
  <div class="seat">
  
    <seat-nav/>

    <div class="seat-content">
      <div class="seat-tab"><router-view /></div>
      <seat-info class="seat-info"/>
    </div>

    

  </div>
</template>

<script>
import SeatNav from "views/seat/childComps/SeatNav"
import SeatInfo from "views/seat/childComps/SeatInfo"


  export default {
  components: { 
    SeatNav,
    SeatInfo,
  },
    
  }
</script>

<style scoped>

.seat{
  width: 100%;
}

.seat-content{
  display: flex;
  width: 100%;
  height: 550px;
  margin-top: 10px;
}

.seat-tab{
  flex: 1;
  width: 70%;
  height: 100%;


  margin-right: 10px;
}

.seat-info{
  width: 23%;
  height: 95%;

  margin-top: 10px;
  /* margin-left: 10px; */

  background:#e1f0ff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

</style>