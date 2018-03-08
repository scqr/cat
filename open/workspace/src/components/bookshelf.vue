<template>
  <div>
    <header class="header_bookshelf">
      <ul id="header">
        <li class="click">收藏</li>
        <li>下载</li>
        <li>历史</li>
      </ul>
      <a class="img2" href="javascript:;"><img src="../assets/img/header.png"/></a>
      <a class="img1" href="javascript:;"><img src="../assets/img/header_0.png"/></a>
    </header>
    <section class="section_bookshelf content">
      <ul class="pic none show">
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_0.png"></a>
          <a class="ps" href="javascript:;"><p>我的影帝大人</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_1.png"></a>
          <a class="ps" href="javascript:;"><p>星辰变</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/s_content_0.png"></a>
          <a class="ps" href="javascript:;"><p>养个少主斗...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_3.png"></a>
          <a class="ps" href="javascript:;"><p>调皮女友太...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_4.png"></a>
          <a class="ps" href="javascript:;"><p>闪婚惊爱</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/lf_content_2.png"></a>
          <a class="ps" href="javascript:;"><p>影帝重生剧本</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/lf_content_3.png"></a>
          <a class="ps" href="javascript:;"><p>不能撸的世界</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_7.png"></a>
          <a class="ps" href="javascript:;"><p>总裁好饿</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_8.png"></a>
          <a class="ps" href="javascript:;"><p>少爷的替嫁...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_9.png"></a>
          <a class="ps" href="javascript:;"><p>我们的少年...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_10.png"></a>
          <a class="ps" href="javascript:;"><p>南风也曾入...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_11.png"></a>
          <a class="ps" href="javascript:;"><p>全天候贴身...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/b_5.png"></a>
          <a class="ps" href="javascript:;"><p>都是黑丝惹...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_13.png"></a>
          <a class="ps" href="javascript:;"><p>总裁的蜜宠...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/e_2.png"></a>
          <a class="ps" href="javascript:;"><p>罪八仙</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_15.png"></a>
          <a class="ps" href="javascript:;"><p>嗜血老公...</p></a>
        </li>
        <li>
          <a class="imgs" href="javascript:;"><img src="../assets/img/bookshelf_16.png"></a>
          <a class="ps" href="javascript:;"><p>校园高手</p></a>
        </li>
      </ul>
      <div class="empty none">
        <img src="../assets/img/bookshelf_other.png"/>
        <p>下载漫画，畅享离线阅读</p>
      </div>
      <div class="emptys none">
        <img src="../assets/img/bookshelf_other.png"/>
        <p>一本都没看，你这样真的好吗？</p>
      </div>
    </section>
  </div>
</template>

<script>
  import "../assets/jquery-1.8.3.min.js"
  import "../assets/cat.js"
export default {
  name: 'bookshelf',
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
    a{
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
  .section_bookshelf{
    width:100%;
    height:100%;
    background:#ffffff;
    border-top:1px solid #efebef;
    .pic{
      width:100%;
      overflow:hidden;
      padding-top:0.11rem;
      li{
        width:0.905rem;
        padding-bottom:0.17rem;
        margin:0 4.6%;
        float:left;
        .imgs{
          width:0.905rem;
          height:1.16rem;
          img{
            width:0.905rem;
            height:1.16rem;
          }
        }
        .ps{
          width:0.905rem;
          height:0.28rem;
          p{
            line-height:0.28rem;
            font-size:12px;
            color:#313431;
            margin-left:0.08rem;
          }
        }
      }
    }
    .empty,.emptys{
      display:none;
      img{
        margin-top: 1.58rem;
        margin-left: 1.40rem;
        width:1rem;
        height:1.05rem;
      }
      p{
        font-size:10px;
        color:#999999;
        text-align: center;
      }
    }
    .show{
      display:block;
    }
  }
</style>
