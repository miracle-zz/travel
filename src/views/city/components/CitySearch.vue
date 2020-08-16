<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item" v-for="(item, key) of list" :key="key">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscoll from 'better-scroll'
export default {
  name: 'CitySerch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscoll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style scoped>
.search {
  padding: 0.1rem;
  height: 0.72rem;
  background: var(--color-background);
}

.search-input {
  box-sizing: border-box;
  height: 0.62rem;
  padding: 0 0.1rem;
  width: 100%;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}

.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background: #fff;
  color: #666;
}
</style>
