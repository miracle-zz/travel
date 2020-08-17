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
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
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
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // 请求数据时需要请求具体城市的参数，可以用vuex传递
      axios.get('/mock/index.json?city=' + this.city).then(this.getHomeInfoSucc)
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>
</style>
