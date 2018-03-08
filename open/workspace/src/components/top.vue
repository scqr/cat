<template>
  <header>
    <ul id="index">
      <li class="click">推荐</li>
      <li>榜单</li>
      <li>分类</li>
      <li>小说</li>
    </ul>
    <a href="javascript:;"><img src="../assets/img/header.png"/></a>
  </header>
</template>

<script>
  import "../assets/jquery-1.8.3.min.js"
  import "../assets/cat.js"
export default {
  name: 'top',
  /*data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
    width:100%;
    height:0.44rem;
    border-bottom:1px solid #dedbde;
    box-sizing: border-box;
    color:#313431;
    background:#ffffff;
    #index{
      font-size:13px;
      margin-left:0.065rem;
      li{
        float:left;
        line-height:0.415rem;
        padding:0 0.19rem;
      }
      .click{
        border-bottom:0.025rem solid #94cf39;
        color:#94cf39;
        border-radius:0.015rem;
        background:url(../assets/img/header_bg.png) no-repeat center bottom;
        background-size: 0.31rem 0.045rem;
      }
    }
    a{
      img{
        float:right;
        width:0.185rem;
        height:0.185rem;
        margin-right:0.155rem;
        margin-top:0.125rem;
      }
    }
  }
</style>
