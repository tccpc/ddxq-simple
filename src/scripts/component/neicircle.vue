<template lang="html">
  <div class="neicirclebox">

    <header>
      <div class="iconfont3" v-link="{path: '/index/neighbor'}">&#xe611;</div>
      <div v-show="isshow" class="iconfont3">&#xe603;</div>
      <div>邻里团</div>
      <div class="iconfont3">&#xe61d;</div>
    </header>

    <div class="neicirclecontains">
      <section v-scroll="{artIds:artId,fns:fn}" id="nei-index-scroll">
        <ul>
          <li v-for="listitem in list" v-link="{name: 'neicircledetail', params: {id: listitem.id}}">
            <img :src="listitem.cover_url" alt=""/>
            <div>
              <h3>{{listitem.title}}</h3>
              <div>
                  <div id="biaoqian1">
                    <p class="iconfont5">&#xf0005;<span>{{listitem.organizer_name}}</span></p>
                    <p>￥{{listitem.min_price}}起</p>
                  </div>
                  <div id="biaoqian2">
                    <p>{{listitem.sold_num}}人参团</p>
                    <p>立即参团</p>
                  </div>
              </div>
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
      isshow:false,
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
    this.$http.get('./mock/neicirclelist.json').then( (res) => {    //ajax 的URL
       try {
          this.list = JSON.parse(res.data).data;
        }catch (e) {
          this.list = res.data.data;
        }
      Vue.nextTick(function(){          //当artId改变时自动传值#content
        that.artId = "nei-index-scroll";
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

