<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont back-abs">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opactityStyle">
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opactityStyle: {
        opactity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opactityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>

<style scoped>
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
}
.back-abs {
  color: #fff;
  font-size: 0.4rem;
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  line-height: var(--header-height);
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  background: var(--color-background);
}

.header-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
</style>
