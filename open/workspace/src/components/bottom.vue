<template>
  <footer>
    <router-link to="/bookshelf"><div class="a" ><img src="../assets/img/footer_bookshelf.png"/><span>书架</span></div></router-link>
    <router-link to="/bookcity"><div class="a" ><img src="../assets/img/footer_bookcity_color.png"/><span class="focus">书城</span></div></router-link>
    <router-link to="/my"><div class="a"><img src="../assets/img/footer_my.png"/><span>我的</span></div></router-link>
  </footer>
</template>

<script>
export default {
  name: 'bottom'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer{
    z-index:1;
    width:100%;
    height:0.52rem;
    background:#ffffff;
    border-top:1px solid #b5b2b5;
    .a{
      height:0.52rem;
      float:left;
      font-size:10px;
      color:#313431;
      text-align: center;
      margin:0 0.475rem;
      img{
        width:0.30rem;
        height:0.255rem;
        margin-top:0.025rem;
      }
      span{
        display:block;
        line-height:0.20rem;
      }
      .focus{
        color:#94cf39;
      }
    }
  }
</style>
