<template>
  <div>
    <nav-content styleNav="row" > 
      <nav-item >
        <div slot="nav-text">实验室：</div>
      </nav-item>
      <nav-item path="/seat/f609">
        <div slot="nav-text">F609</div>
      </nav-item>
      <nav-item path="/seat/f608">
        <div slot="nav-text">F608</div>
      </nav-item>
      <nav-item >
        <seat-search slot="nav-text"/>
      </nav-item>
    </nav-content>
    
    
    
  </div>
</template>

<script>
import NavContent from 'components/common/nav/NavContent.vue'
import NavItem from 'components/common/nav/NavItem.vue'
import SeatSearch from './seatTab/SeatSearch.vue'

  export default {
    components: { 
      NavContent,
      NavItem,
      SeatSearch,

    },
  }
</script>

<style scoped>

</style>