<template lang="html">
  <div class="bbsbox">

    <div class="swiper-container" id="index-swiper">
      <div class="swiper-wrapper">
        <div v-for="listitem in list" class="swiper-slide">
          <img v-if="$index==3" v-link="{path:'/index'}" :src="listitem.img" alt=""/>
          <img v-else :src="listitem.img" alt=""/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  var VueResource = require('../libs/vue-resource.js');
  Vue.use(VueResource);      //插件（ajax）
  export default {
    data () {
    return {
      list: [
        {img:"chongqingmalatang.jpg"},
        {img:"chuanxiangmuyuanmutongfan.png"},
        {img:"dachanghaixian.png"}
      ]
    }
  },
  ready: function() {
    var that = this;
    this.$http.get('/mock/bbslist.json').then( (res) => {    //ajax 的URL
      this.list = res.data.data;
      setTimeout(function(){
        new IScroll('#index-scroll');
      }, 500);
    })
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
  }
</script>

<style lang="css">
</style>
