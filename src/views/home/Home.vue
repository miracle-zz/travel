<template>
  <div>
    <home-header></home-header>
    <carrousel></carrousel>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import carrousel from './components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    carrousel
  }
}
</script>

<style scoped>
</style>
