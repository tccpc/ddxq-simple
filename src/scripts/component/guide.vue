<template lang="html">
  <div class="guide-box">
    <div class="swiper-container" id="guide-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgList">
          <div class="slide-bg">
            <img :src="img[0]" alt="" v-link="{path: '/index'}"/>
          </div>
          <div class="slide-txt">
            <img :src="img[1]" alt="" v-link="{path: '/index'}"/>
            <input v-if="$index ==3" class="btn" type="button" name="name" value="立即开启" v-link="{path: '/index'}">
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList : [
        ["./images/slide1.png","./images/guide_page_txt_1.png"],
        ["./images/slide2.png","./images/guide_page_txt_2.png"],
        ["./images/slide3.png","./images/guide_page_txt_3.png"],
        ["./images/slide4.png","./images/guide_page_txt_4.png"]
      ]
    }
  },
  ready(){
    new Swiper('#guide-swiper',{
      pagination : '.swiper-pagination',
    });
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>
