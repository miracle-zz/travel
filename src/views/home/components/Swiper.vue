<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="(item, index) of list" :key="index">
        <img class="swiper-img" :src="item" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  props: ['swiperList'],
  // props: {
  //   swiperList: {
  //     type: Array,
  //     default () {
  //       return []
  //     }
  //   }
  // },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
      },
      list: this.swiperList
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style scoped>
.swiper-img {
  width: 100%;
}
</style>
