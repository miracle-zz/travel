<template>
  <div>
    <home-header></home-header>
    <carrousel></carrousel>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import carrousel from './components/Swiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
// import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    carrousel,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    // getHomeInfo () {
    //   axios.get('/api/index.json').then(this.getHomeInfoSucc)
    // },
    // getHomeInfoSucc (res) {
    //   console.log(res)
    // }
  },
  mounted () {
    // this.getHomeInfo()
  }
}
</script>

<style scoped>
</style>
