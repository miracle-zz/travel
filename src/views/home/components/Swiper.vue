<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  // data () {
  //   return {
  //     swiperOption: {
  //       pagination: '.swiper-pagination', //引入轮播图页码
  //       loop: true //启用前后循环（最后一项左滑进入第一项）
  //     }
  //   }
  // }
  data () {
    return {
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
      }],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style scoped>
.swiper-img {
  width: 100%;
}
</style>
