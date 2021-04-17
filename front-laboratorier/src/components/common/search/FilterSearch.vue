<template>
  <div class="serach-menu">

    <div class="select-box" v-if="isSelect">
      <select value="" v-model="selectVal">
        <option value="">全部</option>
        <option v-for="item in selectData" :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    
    <label for="search">
      <div class="search-input">
        <input type="text" id="userSearch" placeholder="请输入关键词" v-model="inputVal"/>
        <div class="clear" @click="itemClick"><img src="~assets/image/delect.svg"></div>
      </div>
    </label>
  </div>

</template>

<script>
export default {
  props:{
    searchData:{
      type:Object|Array,
      default(){
        return {};
      }
    },
    isSelect:{
      type:Boolean,
      default:true,
    },
    selectData: Array,
  },
  data(){
    return {
      selectVal:"",
      inputVal:"",
      backData:null,
    }
  },
  methods:{
    itemClick(){
      this.inputVal ="";
    },
    filterDate(searchkey,searchData){
      let storeArry = [];
      if(searchkey === ""){
        this.backData = searchData;
      }else{
        searchData.forEach((element,i)=> {
          for (let [key, value] of Object.entries(element)) {

            var reg = new RegExp(".*?(" + searchkey + ")", "gi");
            if(reg.test(value)){
              storeArry.push(searchData[i]);
              break;
            }
          }
        });
        this.backData = storeArry;
      }
      return this.backData;
    }
   
  },
  created(){

  },

  updated(){

    var backData =  this.filterDate(this.inputVal,this.filterDate(this.selectVal,this.searchData));
    this.$emit('searchVal',backData)

      
  }

}
</script>

<style scoped>
.serach-menu{
  display: flex;
}

.select-box select {
  width: 100px;
  height: 30px;
  margin-right: 15px;
}

select {
  outline: none;
  border: 1px solid rgb(198, 226, 255);
  border-radius: 4px;
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
  width: 170px;
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
