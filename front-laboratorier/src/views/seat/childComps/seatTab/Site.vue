<template>

  <div class="site" :class="{light:isActive}" @click="itemClick()">
    {{loca}}
  </div>
</template>

<script>
  export default {
    props:{

      loca:{
        type:String,
        default:null,
      },
      id:String,
      lab:String,
      
    },
    data(){
      return{
        isActive:false,
      }
    },


    methods:{
      itemClick(){

        this.$bus.$emit("seatSearch","-1")
        this.isActive = true;

        let users = this.$store.state.userInfo;
        for (let i in users) {

          if (users[i].name === this.loca) {
              this.$bus.$emit("showInfo",users[i])
              break;
          }
        }
        
      }
    },

    mounted(){
      this.$bus.$on("seatSearch",(seatId,laboraId)=>{
        if(seatId === this.id && laboraId === this.lab){
          this.isActive = true;
        }else{
          this.isActive = false;
        }
      })
    }


  }
</script>

<style scoped>

.site {
  width: 32%;
  height: 60px;
  background:#d9ecff;
  border: 1px solid #409eff;


  float: left;

  line-height: 60px;
  text-align: center;

}



.site:hover{
  opacity: 0.8;
  cursor: pointer;
}


.light{
  background: #72afeb;
  opacity: 0.7;

}

</style>