<template>
  <div :class="setDir" ref="navContent">

    <div :class="itemStyle" v-if="zoomStatus"><slot></slot></div>

    <div class="zoom" v-if="zommShow">
      <div  
        class="zoom-btn"
        :status="zoomStatus"
        @click="isShow()"
      >
        <i v-if="zoomStatus"><img src="~assets/image/left.svg" alt=""></i>
        <i v-if="!zoomStatus"><img src="~assets/image/right.svg" alt=""></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      styleNav:{
        type:String,
        default:"col"
      }
    },
    data(){
      return{
        zoomStatus: true,
        setDir:null,
        itemStyle:null,
        zommShow:true,
        isHide:null,
      }
    },
    methods:{
      isShow(){

        if(this.zoomStatus){
          this.$refs.navContent.style.width = "15px"
          this.$bus.$emit("toggleNav","15px");
        }else{
          this.$refs.navContent.style.width = "215px"
          this.$bus.$emit("toggleNav","215px");
        }
        this.zoomStatus = !this.zoomStatus;
        
        
      }
    },
    created(){
      if(this.styleNav ==="col" ){
        this.setDir = "nav-content-col";
        this.itemStyle = "nav-item-col"
      }else if(this.styleNav ==="row"){
        this.setDir = "nav-content-row";
        this.itemStyle = "nav-item-row";
        this.zommShow = false;
      }

      
    }
  }
</script>

<style scoped>

.nav-content-col {

  width: 215px;
  /* cursor: pointer; */
  display: flex;

}


.nav-item-col{
  width: 215px;
  padding: 15px 40px;

  box-sizing: border-box; 
}




.nav-content-row {

  height: 60px;
  /* width: 100%; */
  border-bottom: 2px solid rgb(217, 236, 255);
  cursor: pointer;
  
}

.nav-item-row{
  width: 100%;
   /* padding-top: 15px; */
   display: flex;
}

.nav-item-row>div{
  /* flex: 1; */
    display: flex;
    align-items: center;
    height: 60px;
    z-index: 1
}



.zoom {
  width: 15px;
  height: 900px;
  background: rgb(217, 236, 255);
}
.zoom-btn {
  height: 70px;
  /* margin-top: 250px; */
  margin-top: 200px;
  cursor: pointer;
  background: rgb(198, 226, 255);
}
i {
  position: relative;
  top: 40%;
}







</style>