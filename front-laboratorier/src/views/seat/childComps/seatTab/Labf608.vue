<template>
  <div class="lab-608" :getLoca="getData()">
    <div class="col">
      <div class="row first" >
        <div>
          <div class="blank">停用</div>

          <site :loca="siteLoca[1]" id="1" lab="f608"/>
          <site :loca="siteLoca[2]" id="2" lab="f608"/>
        </div>
      </div>
      <div class="row">
        <div>

          <site :loca="siteLoca[3]" id="3" lab="f608"/>
          <site :loca="siteLoca[4]" id="4" lab="f608"/>
          <site :loca="siteLoca[5]" id="5" lab="f608"/>
          <site :loca="siteLoca[6]" id="6" lab="f608"/>
          <site :loca="siteLoca[7]" id="7" lab="f608"/>
          <site :loca="siteLoca[8]" id="8" lab="f608"/>
        </div>
      </div>
      <div class="row">
        <div>

          <site :loca="siteLoca[9]"  id="9"  lab="f608"/>
          <site :loca="siteLoca[10]" id="10" lab="f608"/>
          <site :loca="siteLoca[11]" id="11" lab="f608"/>
          <site :loca="siteLoca[12]" id="12" lab="f608"/>
          <site :loca="siteLoca[13]" id="13" lab="f608"/>
          <site :loca="siteLoca[14]" id="14" lab="f608"/>
        </div>
      </div>
    </div>
    <div class="style door">前门</div>
    <div class="style window1">窗户</div>
    <div class="style window2">窗户</div>
    <div class="style-air">空调</div>
     <div class="style-water">饮水机</div>
  </div>
</template>

<script>
import Site from "./Site.vue";

export default {
  components: {
    Site,
  },


  data() {
    return {
      users:null,
      siteLoca: [],
    };
  },

  methods: {

    getData(){
      let users = this.$store.state.userInfo;
      if( users === null ){
        getUserInfo().then(res => {
            this.users = res;
            this.showUsers = this.users;
            this.$store.commit("commitUserInfo",this.users);

            //注意异步操作
            this.users = this.$store.state.userInfo;
            this.userName();
        })
      }
      else{
        this.users = this.$store.state.userInfo;
        this.userName();
      }
      
    },

    userName() {
      for (let index = 1; index < this.users.length; index++) {
        for (let i in this.users) {
          if (
            this.users[i].laboraid === "f608" &&this.users[i].seatId === `${index}`) {
              this.siteLoca[index] = this.users[i].name;
              break;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.lab-608 {
  width: 70%;
  height: 90%;

  margin-left: 17%;
  position: relative;
  display: flex;
}


.col {
  width: 35%;
  height: 95%;
  flex: 1;
  margin: -15px 30px;


  display: flex;
  flex-direction: column;
}



.row {
  flex: 1;

  width: 100%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
}




.row > div {
  width: 90%;
}

.blank{
  width: 32%;
  height: 60px;
  background:#d9ecff;
  border: 1px solid #409eff;


  float: left;

  line-height: 60px;
  text-align: center;
}

.first{
  transform: translateY(25px);
}

.style{
  height: 11px;
  width: 120px;
  background: #e1f0ff;
  text-indent: 35px;
  letter-spacing:30px;
  font-size: 10px;
  position: absolute;


  left: 12%;
  top: 5%;
}


.door{
  left: 12%;
  top: 5%;
}

.window1{
  left: 15%;
  top: 95%;
}

.window2{
  left: 40%;
  top: 95%;
}

.style-air{
  height: 100px;
  width: 11px;
  background: #e1f0ff;
  line-height: 50px;
  font-size: 10px;
  position: absolute;


  top: 70%;
  right: 5%;
}


.style-water{
  height: 100px;
  width: 11px;
  background: #e1f0ff;
  line-height: 32px;
  font-size: 10px;
  position: absolute;


  top: 35%;
  left: 2%;

}
</style>