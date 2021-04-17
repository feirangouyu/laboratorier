<template>
  <div class="main-nav"  >
    <nav-content styleNav="col" > 
      <nav-item path="/home" >
        <div slot="nav-icon-active"> <img src="~assets/image/home-active.svg" alt=""></div>
        <div slot="nav-icon"> <img src="~assets/image/home.svg" alt=""></div>
        <div slot="nav-text">首页信息</div>
      </nav-item>
      <nav-item path="/seat">
        <div slot="nav-icon-active"> <img src="~assets/image/seat-active.svg" alt=""></div>
        <div slot="nav-icon"> <img src="~assets/image/seat.svg" alt=""></div>
        <div slot="nav-text">座位表</div>
      </nav-item>
      <nav-item path="/userinfo">
        <div slot="nav-icon-active"> <img src="~assets/image/userinfo-active.svg" alt=""></div>
        <div slot="nav-icon"> <img src="~assets/image/userinfo.svg" alt=""></div>
        <div slot="nav-text">人员信息</div>
      </nav-item>
      <nav-item path="/hygienetab">
        <div slot="nav-icon-active"> <img src="~assets/image/hygienetab-active.svg" alt=""></div>
        <div slot="nav-icon"> <img src="~assets/image/hygienetab.svg" alt=""></div>
        <div slot="nav-text">卫生表</div>
      </nav-item>
      <nav-item path="/account">
        <div slot="nav-icon-active"> <img src="~assets/image/account-active.svg" alt=""></div>
        <div slot="nav-icon"> <img src="~assets/image/account.svg" alt=""></div>
        <div slot="nav-text">消费账单</div>
      </nav-item>
      <nav-item path="/materials">
        <div slot="nav-icon-active"> <img src="~assets/image/materials-active.svg" alt=""></div>
        <div slot="nav-icon"> <img src="~assets/image/materials.svg" alt=""></div>
        <div slot="nav-text">公共物资</div>
      </nav-item>
    </nav-content>
    
  </div>
</template>

<script>

import NavContent from 'components/common/nav/NavContent.vue'
import NavItem from 'components/common/nav/NavItem.vue'

  export default {
    components: { 
      NavContent,
      NavItem
    
    },
    data(){
      return{
        home:"首页",
        zoomStatus: true,
      }
    },

    
  }
</script>


<style scoped>



</style>