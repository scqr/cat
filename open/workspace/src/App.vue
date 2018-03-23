<template>
  <div id="app">
    <router-view @fatherTop="up"/>
  </div>
</template>

<script>
  import "./assets/common.scss"
  import "./assets/jquery-1.8.3.min"
  import "./assets/youziku.api.min.js"
  import bottom from "./components/bottom"
  import top from "./components/top"
  import my from "./components/my"
  import bTop from "./components/bTop"
  import mTop from "./components/mTop"
  import bookshelf from "./components/bookshelf"
  import bookcity from "./components/bookcity"
  import bStory from "./components/bStory"
  import bClassify from "./components/bClassify"
  import bList from "./components/bList"
  import bRecommend from "./components/bRecommend"

  export default {
    name: 'App',
    data:function() {
      return {
        up:top
      }
    },
    components:{
      top,
      bottom,
      my,
      bTop,
      mTop,
      bookcity,
      bookshelf,
      bStory,
      bClassify,
      bList,
      bRecommend
    },
    methods:{
      fatherTop:function (x) {
        console.log(x);
        this.up = x;
      }
    },
    mounted:function () {
      $youziku.load("body", "255078fc3712429580f327bee1132112", "LiDeBiao-Xing3");
      $youziku.draw();
    }
  }


</script>

<style scoped lang="scss">
  #app{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
</style>
