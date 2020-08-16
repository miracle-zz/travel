<template>
  <div>
    <div class="recommend-title">周末推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of weekendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style  scoped>
.recommend-title {
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}
.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
}
.item-img {
  width: 100%;
}

.item-info {
  padding: 0.1rem;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-desc {
  line-height: 0.4rem;
  color: #cccccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
