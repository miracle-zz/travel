<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped >
.header {
  display: flex;
  line-height: 0.86rem;
  background: var(--color-background);
  color: #fff;
  /* text-align: center; */
}

.header .header-left {
  width: 0.64rem;
  float: left;
}

.header-left .back-icon {
  text-align: center;
  font-size: 0.4rem;
}

.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}

.header-right {
  width: 1.24rem;
  text-align: center;
  float: right;
}

.header-right .arrow-icon {
  margin-left: -0.04rem;
  font-size: 0.2rem;
}
</style>
