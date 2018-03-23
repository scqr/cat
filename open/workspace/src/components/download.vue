<template>
    <div class="empty none content">
      <img src="../assets/img/bookshelf_other.png"/>
      <p>下载漫画，畅享离线阅读</p>
    </div>
</template>

<script>
  import "../assets/jquery-1.8.3.min.js"
  import "../assets/cat.js"
export default {
  name: 'download',
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
  .empty{
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
</style>
