<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt />
      <div class="banner-info">
        <div class="banner-tittle">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <gallary :imgs="imgs" v-show="showGallary" @close="HandleGallaryClose"></gallary>
    </fade-animation>
  </div>
</template>

<script>
import gallary from 'components/common/Gallary'
import FadeAnimation from 'components/common/fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    gallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    HandleGallaryClose () {
      this.showGallary = false
    }
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_r_800x800_83a5fe3a.jpg',
        'http://img1.qunarzz.com/sight/p0/1510/ca/ca60a080020329ef90.img.jpg_350x240_9ff2208e.jpg',
        'http://img1.qunarzz.com/sight/p0/1510/cc/ccafbdaac21bdbf790.img.jpg_350x240_c35f8451.jpg'
      ],
      showGallary: false
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img {
  width: 100%;
}
.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  /* background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); */
}

.banner-title {
  font-size: 0.32rem;
  padding: 0 0.2rem;
  flex: 1;
}

.banner-number {
  margin: 0.14rem;
  padding: 0 0.32rem;
  line-height: 0.32rem;
  font-size: 0.24rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.8);
}

.banner-icon {
  font-size: 0.24rem;
}
</style>
