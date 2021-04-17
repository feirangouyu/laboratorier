<template>
  <div>

    <ul class="infoTab">
      <li v-for="(item, index) in info" :key="index">
        <div v-if="isImage(item)">{{index|changeKey}}<img  :src="item"></div>
        <p v-else>{{ index|changeKey}}{{item}}</p>       
      </li>
    </ul>

  </div>
</template>

<script>
  export default {

    data(){
      return{
        info:null,
      } 
    },
    methods:{
      isImage(value){
      let end = value.split('.')[1];
        if(end === 'com/30'){
          return true;
        }
    
      }
    },
    mounted(){
      this.$bus.$on("showInfo",res=>{
        this.info = res
      })
    },
    filters:{
      changeKey(value){
        if(value === "logo")
        {
          return "头像: "
        }else if(value === "name"){
          return "姓名: "
        }else if(value === "class"){
          return "班级: "
        }else if(value === "id"){
          return "学号: "
        }else if(value === "laboraid"){
          return "实验室: "
        }else if(value === "seatId"){
          return "座位号: "
        }
        
      }
    }


  }
</script>

<style scoped>

.infoTab{
  width: 100%;
  height: 100%;
  padding: 20px 30px;
}

.infoTab li{
  height: 70px;
  width: 90%;

  display: flex;
  align-items: center;

  
}

img{
  vertical-align:middle; 
}


</style>