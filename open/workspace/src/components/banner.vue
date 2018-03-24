<template>
  <div class="banner" id="box">
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in detail">
          <a>
            <figure class="wp-avatar banner">
              <img v-cloak :src="item.imgs" class="img"/>
            </figure>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/swiper.min.css'
  import Swiper from 'swiper'

export default {
  name: 'banner',
  data:function () {
    return {
      detail:[
        {'imgs':'../../static/img/banner_0.png'},
        {'imgs':'../../static/img/banner_1.png'},
        {'imgs':'../../static/img/banner_2.png'},
        {'imgs':'../../static/img/banner_3.png'},
        {'imgs':'../../static/img/banner_4.png'},
        {'imgs':'../../static/img/banner_5.png'},
      ]
    }
  },
  mounted:function () {
    this.auto()
  },
  methods:{
    auto() {
      setTimeout(function () {
        var swiperObj =  new Swiper('#swiper', {
          loop: true,
          pagination: '.swiper-pagination',
          autoplay: 2000,
          paginationClickable: true
        });
      }, 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  html,body{
    height:100%;
  }
  .banner{
    width:100%;
    height:1.80rem;
    background:#ffffff;
    overflow:hidden;
    position:relative;
    .wp-avatar{
      margin:0;
      padding:0;
      .img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
