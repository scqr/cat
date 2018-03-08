<template>
  <div id="app">
    <top></top>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
  import "./assets/common.scss"
  import "./assets/youziku.api.min.js"
  import bottom from "./components/bottom"
  import top from "./components/top"

  export default {
    name: 'App',
    components:{
      top,bottom
    }
  }

  $youziku.load("body", "255078fc3712429580f327bee1132112", "LiDeBiao-Xing3");
  $youziku.draw();
</script>

<style scoped lang="scss">
  #app{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
</style>
