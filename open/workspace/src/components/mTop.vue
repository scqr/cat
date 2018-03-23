<template>
  <header class="header_my">
    <a href="javascript:;"><img src="../assets/img/my_header_0.png"></a>
    <h2>我的</h2>
    <a href="javascript:;"><img src="../assets/img/my_header_1.png"></a>
  </header>
</template>

<script>
  import "../assets/jquery-1.8.3.min.js"
  import "../assets/cat.js"
export default {
  name: 'mTop'
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
  body{
    background:#f2f2f2;
  }
  #big{
    width:100%;
    height:100%;
    background:#8c8c8c;
    opacity: 0.4;
    position:absolute;
    top:0;
    left:0;
    display:none;
  }
  .header_my{
    width:100%;
    height:0.50rem;
    border-bottom:1px solid #c3c3c3;
    box-sizing: border-box;
    background:#ffffff;
    display:-webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    a{
      width:0.19rem;
      height:0.19rem;
      img{
        width:0.19rem;
        height:0.19rem;
        vertical-align: top;
      }
    }
    h2{
      font-size:18px;
      color:#353535;
      margin:0 1.295rem;
    }
  }
</style>
