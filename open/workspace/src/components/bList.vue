<template>
  <div class="list panel content">
    <listLeft @rightCon="con"></listLeft>
    <component  :is="cli" class="right"></component>
  </div>
</template>

<script>
  import listPopularity from "./listPopularity";
  import bestSelling from "./bestSelling";
  import newBook from "./newBook";
  import listCompletion from "./listCompletion";
  import listFree from "./listFree";
  import listLeft from "./listLeft";

  export default {
    name: 'bList',
    components:{
      listLeft,
      listPopularity,
      bestSelling,
      newBook,
      listCompletion,
      listFree
    },
    data:function(){
      return {
        cli:listPopularity
      }
    },
    methods:{
      con:function (x) {
        this.cli = x;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  html,body{
    height:100%;
  }
  .content{
    -webkit-flex:1;
    height:100%;
    overflow-x: hidden;
    overflow-y:scroll;
    position:relative;
  }
  .right{
    width:75%;
    height:100%;
    float:right;
    padding-left:5%;
    background:#ffffff;
  }
</style>
