<template>

  <div class="lab-609" :getLoca="getData()">
    <div class="col">
      <div class="row">
        <div>
          <site :loca="siteLoca[1]" id='1' lab="f609"/>
          <site :loca="siteLoca[2]" id='2' lab="f609"/>
          <site :loca="siteLoca[3]" id='3' lab="f609"/>
          <site :loca="siteLoca[4]" id='4' lab="f609"/>
          <site :loca="siteLoca[5]" id='5' lab="f609"/>
          <site :loca="siteLoca[6]" id='6' lab="f609"/>
        </div>
      </div>
      <div class="row">
        <div>

          <site :loca="siteLoca[7]" id='7' lab="f609"/>
          <site :loca="siteLoca[8]" id='8' lab="f609"/>
          <site :loca="siteLoca[9]" id='9' lab="f609"/>
          <site :loca="siteLoca[10]" id='10' lab="f609"/>
          <site :loca="siteLoca[11]" id='11' lab="f609"/>
          <site :loca="siteLoca[12]" id='12' lab="f609"/>
        </div>
      </div>
      <div class="row end">
        <div>

          <site :loca="siteLoca[13]" id='13' lab="f609"/>
          <site :loca="siteLoca[14]" id='14' lab="f609"/>
          <site :loca="siteLoca[15]" id='15' lab="f609"/>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div>

          <site :loca="siteLoca[16]" id='16' lab="f609"/>
          <site :loca="siteLoca[17]" id='17' lab="f609"/>
          <site :loca="siteLoca[18]" id='18' lab="f609"/>
          <site :loca="siteLoca[19]" id='19' lab="f609"/>
          <site :loca="siteLoca[20]" id='20' lab="f609"/>
          <site :loca="siteLoca[21]" id='21' lab="f609"/>

        </div>
      </div>
      <div class="row">
        <div>

          <site :loca="siteLoca[22]" id='22' lab="f609"/>
          <site :loca="siteLoca[23]" id='23' lab="f609"/>
          <site :loca="siteLoca[24]" id='24' lab="f609"/>
          <site :loca="siteLoca[25]" id='25' lab="f609"/>
          <site :loca="siteLoca[26]" id='26' lab="f609"/>
          <site :loca="siteLoca[27]" id='27' lab="f609"/>

        </div>
      </div>
      <div class="row end">
        <div>
          <site :loca="siteLoca[28]" id='28' lab="f609"/>
          <site :loca="siteLoca[29]" id='29' lab="f609"/>
          <site :loca="siteLoca[30]" id='30' lab="f609"/>
        </div>
      </div>
    </div>
    <div class="style window1">窗户</div>
    <div class="style window2">窗户</div>
    <div class="style font-door">前门</div>
    <div class="style end-door">后门</div>
    <div class="style-air">空调</div>
    <div class="style-water">饮水机</div>
    <div class="style-road"><div>过</div><div>道</div></div>
  </div>
</template>

<script>


import Site from "./Site.vue";
import {getUserInfo} from 'network/reqData'

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
            this.users[i].laboraid === "f609" &&this.users[i].seatId === `${index}`) {
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
.lab-609 {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;


  top: 25px;
}

.col {
  width: 35%;
  height: 95%;
  flex: 1;


  margin: 10px 30px;

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


.row>div{
  width: 90%;
}

.end{
  transform: translateY(-25px);
}

.style{
  height: 100px;
  width: 11px;
  background: #e1f0ff;
  line-height: 50px;
  font-size: 10px;
  position: absolute;
}


.window1{  
  top: 18%;
}

.window2{ 
  top: 60%;
}

.font-door{
  right: 10px;
}

.end-door{
  right: 10px;
  bottom: 80px;
}

.style-air{
  height: 11px;
  width: 100px;
  background: #e1f0ff;
  text-indent: 25px;
  letter-spacing:25px;
  font-size: 10px;
  position: absolute;
  left: 5%;
}

.style-water{
  height: 11px;
  width: 100px;
  background: #e1f0ff;
  text-indent: 25px;
  letter-spacing:12px;
  font-size: 10px;
  position: absolute;


  right: 20%;
}

.style-road{
  width: 50px;
  height: 300px;

  line-height: 150px;
  text-align: center;
  font-size: 15px;
  color:rgb(58, 57, 56);

  border-left: 1px solid rgb(178, 211, 230);
  border-right: 1px solid rgb(178, 211, 230);


  position: absolute;
  left: 47%;
  top: 20%;
}

</style>