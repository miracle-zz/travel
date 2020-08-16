<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      deafult () {
        return {}
      }
    },
    hotCities: {
      type: Array,
      deafult () {
        return {}
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.border-topbottom:before {
  border-color: #ccc;
}

.border-bottom:before {
  border-color: #ccc;
}

.border-topbottom::after {
  border-color: #ccc;
}
.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
  padding: 0.1rem;
}

.button-wrapper {
  float: left;
  width: 33.33%;
}

.button {
  text-align: center;
  padding: 0.1rem 0;
  margin: 0.1rem;
  border: 0.02rem solid #ccc;
  border-radius: 0.06rem;
}

.item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
}
</style>
