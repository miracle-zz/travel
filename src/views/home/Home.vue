<template>
  <div>
    <home-header></home-header>
    <carrousel :swiperList="swiperList" v-if="swiperList.length"></carrousel>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :hotList="hotList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import carrousel from './components/Swiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      // city: '',
      swiperList: {
        list: []
      },
      iconList: [],
      hotList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    carrousel,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.hotList = res.data.hotList
        this.weekendList = res.data.weekendList
        // console.log(this.iconList) // 能打印出数据
      }
    }
  },
  mounted () {
    // console.log('已被挂载')
    this.getHomeInfo()
    //   console.log(this.iconList) // 没有数据
    //   console.log(this.swiperList.length)
    //   console.log('挂载完')
  }
}
</script>

<style scoped>
</style>
