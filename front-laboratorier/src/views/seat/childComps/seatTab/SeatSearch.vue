<template>
  <div class="serach-menu">
    
    <label for="search">
      <div class="search-input">
        <input type="text" id="userSearch" placeholder="请输入姓名" v-model="inputVal"/>
        <div class="clear" @click="itemClick"><img src="~assets/image/delect.svg"></div>
      </div>
    </label>
  </div>

</template>

<script>
export default {
  data(){
    return {
      inputVal:null,
      users:null,
    }
  },
  methods:{
    itemClick(){
      this.inputVal ="";
    },
    filterDate(searchkey,searchData){
      if(searchkey !=  ""){
        searchData.forEach((element,i)=> {
          for(let [key, value] of Object.entries(element)) {
            if(key === "name"){
              var reg = new RegExp(".*?(" + searchkey + ")", "gi");
              if(reg.test(value)){
                this.$bus.$emit("seatSearch",searchData[i].seatId,searchData[i].laboraid)
                // console.log(searchData[i].seatId);
                break;
              }
            }
          }
        });
      }else{
        this.$bus.$emit("seatSearch","-1")
      }
      
    }
   
  },


  updated(){

    this.users = this.$store.state.userInfo;
    this.filterDate(this.inputVal,this.users);
    
  }

}
</script>

<style scoped>
.serach-menu{
  display: flex;
}



.search-input{
  width: 190px;
  height: 27px;
  display: flex;
  align-items: center;
  border: 1px solid rgb(198, 226, 255);
  border-radius: 4px;
}

.search-input input{
  outline: none;
  padding-left: 10px;
  border: none;
  border-radius: 4px 0px 0px 4px;
  width: 180px;
  height: 27px;
}

.clear{
  margin-right: 10px;
  width: 15px;
  height: 27px;
  line-height: 30px;

}


.search-input:hover,.select-box select:hover {
  border: 1px solid rgb(64, 158, 255);
}
.clear:hover{
  opacity: 0.8;
  cursor: pointer;
}

</style>
