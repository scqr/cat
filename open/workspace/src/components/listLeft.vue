<template>
  <div class="list_left">
    <ul id="ulss">
      <li class="hover" @click="func0">人气榜</li>
      <li @click="func1">畅销榜</li>
      <li @click="func2">新书榜</li>
      <li @click="func3">完结榜</li>
      <li @click="func4">免费榜</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'listLeft',
    methods:{
      func0:function () {
        console.log(0);
        this.$emit('rightCon','listPopularity');
      },
      func1:function () {
        console.log(1);
        this.$emit('rightCon','bestSelling');
      },
      func2:function () {
        console.log(2);
        this.$emit('rightCon','newBook');
      },
      func3:function () {
        console.log(3);
        this.$emit('rightCon','listCompletion');
      },
      func4:function () {
        console.log(4);
        this.$emit('rightCon','listFree');
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
  .list_left{
        width:20%;
        height:100%;
        float:left;
        border-right:1px solid #dedbde;
        box-sizing: border-box;
        background:#f7f7f7;
        #ulss{
          width:100%;
          height:100%;
          font-size:10px;
          color:#636563;
          float:left;
          li{
            width:100%;
            height:0.50rem;
            text-align: center;
            line-height:0.50rem;
          }
          .hover{
            background:#ffffff;
            color:#94cf39;
            border-right:1px solid #ffffff;
            border-top:1px solid #dedbde;
            border-bottom:1px solid #dedbde;
          }
        }
      }
</style>
