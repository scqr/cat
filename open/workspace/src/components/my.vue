<template>
  <div>
    <div id="big"></div>
    <header class="header_my">
      <a href="javascript:;"><img src="../assets/img/my_header_0.png"></a>
      <h2>我的</h2>
      <a href="javascript:;"><img src="../assets/img/my_header_1.png"></a>
    </header>
    <section class="section_my">
      <div class="log">
        <a href="javascript:;">
          <img src="../assets/img/my_section_log.png"/>
          <p>登录/注册</p>
        </a>
      </div>
      <ul class="section_my_1">
        <li><a href="javascript:;"><img src="../assets/img/my_section_0.png"/>VIP特权</a></li>
        <li class="i"><a href="javascript:;"><img src="../assets/img/my_section_1.png"/>我的资产</a></li>
      </ul>
      <ul class="section_my_1">
        <li class="i"><a href="javascript:;"><img src="../assets/img/my_section_2.png"/>福利中心</a></li>
      </ul>
      <ul class="section_my_1">
        <li class="i"><a href="javascript:;"><img src="../assets/img/my_section_3.png"/>导入本地漫画</a></li>
      </ul>
      <ul class="section_my_1">
        <li><a href="javascript:;"><img src="../assets/img/my_section_4.png"/>微信公众号</a></li>
        <li class="i late" id="late"><a href="javascript:;"><img src="../assets/img/my_section_5.png"/>夜间模式</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
  import "../assets/jquery-1.8.3.min.js"
  import "../assets/cat.js"
export default {
  name: 'my',
  /*data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }*/
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
  .section_my{
    width:100%;
    height:100%;
    .log{
      width:100%;
      height:0.75rem;
      padding-top:0.15rem;
      background:#ffffff;
      border-bottom:1px solid #dcdcdc;
      margin-bottom:0.10rem;
      a{
        height:0.60rem;
        margin-left:0.15rem;
        img{
          width:0.605rem;
          height:0.60rem;
          float:left;
          vertical-align: top;
        }
      }
      p{
        line-height:0.60rem;
        margin-left:0.20rem;
        float:left;
        font-size:15px;
        color:#333333;
      }
    }
    .section_my_1{
      width:96%;
      background:#ffffff;
      padding:0 2%;
      margin-bottom:0.10rem;
      li{
        background:url(../assets/img/my_section_bg.png) no-repeat 3.5rem 0.14rem;
        background-size:0.06rem 0.11rem;
        padding:0.115rem 0 0.115rem 0.05rem;
        border-bottom:1px solid #e9e9e9;
        box-sizing: border-box;
        a{
          font-size:12px;
          color:#353535;
          line-height:0.18rem;
          img{
            width:0.18rem;
            height:0.18rem;
            vertical-align: top;
            margin-right:0.14rem;
          }
        }
      }
      .i{
        border-bottom:none;
      }
      .late{
        border-bottom:none;
        border-top:1px solid #e9e9e9;
        box-sizing: border-box;
        padding-top:0.16rem;
        padding-bottom:0.16rem;
        background:url(../assets/img/my_section_btn.png) no-repeat 3.05rem 0.10rem;
        background-size: 0.51rem 0.31rem;
      }
    }
  }
</style>
