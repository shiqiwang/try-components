<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/selectIconFont/iconfont.eot');
    src: url('./assets/selectIconFont/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/selectIconFont/iconfont.woff') format('woff'),
    url('./assets/selectIconFont/iconfont.ttf') format('truetype'),
    url('./assets/selectIconFont/iconfont.svg#iconfont') format('svg');
  }
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
