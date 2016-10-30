<template lang="html">
  <div class="bbsbox">

    <header>
      <div class="iconfont3" v-link="{path: '/index/neighbor'}">&#xe611;</div>
      <div>论坛</div>
      <div class="iconfont3">&#xe603;</div>
    </header>

      <div class="bbscontains">
        <section v-scroll="{artIds:artId,fns:fn}" id="bbsindex-scroll">
            <ul>
              <li v-for="listitem in list">
                <p>{{{listitem.title}}}</p>
                <div class="imgdiv">
                  <img v-for="imglist in listitem.img" v-bind:src="imglist" alt="tupian"/>
                  <!--<img src="http://ddimg.ddxq.mobi/f130b7ad1476006687439.jpg" alt="tupian"/>-->
                </div>
                <div>
                  <span>{{{listitem.name}}}</span>
                  <span>{{listitem.date}}</span>
                  <span>{{listitem.sum}}回复</span>
                </div>
              </li>
            </ul>
        </section>
      </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import Iscroll from '../libs/libs/iscroll-probe.js';
  export default {
    data () {
    return {
      list: [],
      artId: '',
      fn: function(){},
      refreshtxt:"下拉刷新",
      moretxt:"加载更多",
      isup:false
    }
  },
  ready: function() {
    var that = this;
    this.$http.get('./mock/bbslist.json').then( (res) => {    //ajax 的URL
        try {
          this.list = JSON.parse(res.data).data;
        }catch (e) {
          this.list = res.data.data;
        }
      Vue.nextTick(function(){          //当artId改变时自动传值#content
        that.artId = "bbsindex-scroll";
        that.fn = function() {
              console.log(that.artId);
              var myScroll=new Iscroll('#'+that.artId,{
                click:true,
                mouseWheel: true,
                probeType: 3
              });
        }
      });
    })
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
  }
</script>

