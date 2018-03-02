<template>
  <div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: pink">Slide 1</div>
        <div class="swiper-slide" style="background: yellow">Slide 2</div>
        <div class="swiper-slide" style="background: orange">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
  import '../../../node_modules/swiper/dist/js/swiper.min.js'


  export default {
    name: 'hello',
    data () {
      return {

      }
    },
    mounted () {
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';
  .swiper-container {
    width: 600px;
    height: 300px;
  }
</style>
