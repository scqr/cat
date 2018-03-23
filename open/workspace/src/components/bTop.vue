<template>
  <header class="header_bookshelf">
      <ul id="header">
        <router-link to="/collections"><li class="click">收藏</li></router-link>
        <router-link to="/downloads"><li>下载</li></router-link>
        <router-link to="/historys"><li>历史</li></router-link>
      </ul>
      <a class="img2" href="javascript:;"><img src="../assets/img/header.png"/></a>
      <a class="img1" href="javascript:;"><img src="../assets/img/header_0.png"/></a>
    </header>
</template>

<script>
  import "../assets/jquery-1.8.3.min.js"
  import "../assets/cat.js"
export default {
  name: 'bTop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body,div,p,h1,h2,h3,h4,h5,h6,ol,ul,li,dl,dt,dd,th,tr,td,hr,caption,table,form,img,input,legend,fieldset{
    margin:0;
    padding:0;
  }
  html,body{
    height:100%;
  }
  html{
    font-size: 26.67vw;
  }
  body{
    background:#f7f7f7;
    display:-webkit-flex;
    -webkit-flex-direction: column;
    -webkit-justify-content: space-between;
  }
  ol,ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    display:block;
  }
  img{
    border:none;
  }
  .content{
    -webkit-flex:1;
    overflow-x: hidden;
    overflow-y:scroll;
    position:relative;
  }
  header{
    width:100%;
    height:0.44rem;
    border-bottom:1px solid #dedbde;
    box-sizing: border-box;
    color:#313431;
    background:#ffffff;
    #header{
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
    .img1,.img2{
      float:right;
      width:0.185rem;
      height:0.185rem;
      margin-top:0.125rem;
      margin-right:0.155rem;
      img{
        width:0.185rem;
        height:0.185rem;
        vertical-align: top;
      }
    }
  }
</style>
