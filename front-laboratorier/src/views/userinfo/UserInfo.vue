<template>
  <div class="user-info">
    <user-header :userNum="userNum" class="user-header">
      <filter-search @searchVal="getSearchVal" 
                  :searchData = "users" 
                  :isSelect="true"
                  :selectData="labsId"/>
    </user-header>
    <user-list :listHead="listHead" :items="showUsers"  class="list"/>
  </div>
</template>

<script>

import UserHeader from "./childComps/UserHeader.vue";
import FilterSearch from "../../components/common/search/FilterSearch";
import UserList from "../../components/content/List.vue";


import {getUserInfo} from 'network/reqData'


export default {
  name: "UserInfo",
  components: { 
    UserHeader, 
    FilterSearch, 
    UserList 
  },

  data() {
    return {
      showUsers:null,
      users:null,

      userNum: 50,
      labId: ["F609","F608"],
      listHead: ["头像", "姓名", "专业班级", "学号", "所属实验室","座位号"],
    };
  },
  
  methods:{
    getSearchVal(value){
      this.showUsers = value;
    },
    getData(){
      let users = this.$store.state.userInfo;
      if( users === null ){
        getUserInfo().then(res => {
            this.users = res;
            this.$store.commit("commitUserInfo",this.users);
            this.showUsers = this.$store.state.userInfo;
        })
      }
      else{
        this.showUsers = this.$store.state.userInfo;
      }
      
    }

  },
  mounted() {
    getUserInfo().then(res => {
       this.users = res;
      this.showUsers = this.users;
    }
   )
  },

  mounted(){
    this.getData();
    console.log(this.showUsers);
    
  },

};
</script>

<style scoped>
.list{
  margin-top: 25px;
}

</style>