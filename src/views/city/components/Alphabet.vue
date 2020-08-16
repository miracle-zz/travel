<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlpha',
  props: {
    cities: {
      type: Object,
      deafult () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
}

.item {
  line-height: 0.4rem;
  text-align: center;
  color: var(--color-background);
}
</style>
