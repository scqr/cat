<template>
  <ul class="pic none show content">
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
</template>

<script>
  import "../assets/jquery-1.8.3.min.js"
  import "../assets/cat.js"
export default {
  name: 'collection',
  mounted:function(){
    this.$emit("fatherTop","bTop");
  }
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
  .pic{
      width:100%;
      overflow:hidden;
      padding-top:0.11rem;
      overflow-x: hidden;
      overflow-y:scroll;
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
</style>
