<template lang="html">
  <div class="takeout-container">
    <header id="to-header">
      <image v-on:click="back" src="./images/back.png" alt="" />
      周边商家
    </header>
    <nav>
      <div class="nav-left">
        <img v-bind:src="cate_img" alt="" />
        <span>{{category}}</span>
      </div>
      <p v-on:click="showAllCategory">
        分类
      </p>
      <ul class="all-category" v-if="showAll">
        <template v-for="category in all_category">
          <li v-bind:class="category.id == this.$route.params.id ? 'nowcate':''">
            <img v-bind:src="category.cateimg" alt="" />
            <span>{{category.category}}</span>
          </li>
        </template>
      </ul>
    </nav>
    <section id="circum-scroll">
      <ul class="merchant-list">
        <div class="yo-mask" v-show="showAll"></div>
        <li v-for="merchant in merchantList" v-link="{name: 'detail', params: {id:merchant.id}}">
          <img v-bind:src="merchant.merchantimg" alt="" />
          <section>
            <b>
              {{merchant.mername}}
              <image v-if="merchant.isnew" src="./images/merchantnew.png" alt="" />
            </b>
            <i>{{merchant.time}} | 月售{{merchant.monthsale}}</i>
            <span>{{merchant.pro}}</span>
          </section>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data () {
    return {
      category:'',
      cate_img:'',
      merchantList:[],
      all_category:[],
      showAll:false,
      isclick:false
    }
  },
  ready:function(){
    var that = this;
    this.$http.get('./mock/category.json')
      .then((res) => {
        try{
          that.all_category = JSON.parse(res.data);
        }catch(e){
          that.all_category = res.data;
        }
        res.data.forEach(({id, category, cateimg}) => {
          if(id == this.$route.params.id){
            that.category = category;
            that.cate_img = cateimg;
          };
          return;
        })
      });
      this.$http.get('./mock/'+this.$route.params.id+'.json')
        .then((res) => {
          try{
            that.merchantList = JSON.parse(res.data);
          }catch(e){
            that.merchantList = res.data;
          }
          Vue.nextTick(function(){
            new IScroll('#circum-scroll',{
              click:true
            })
          });
        });
  },
  methods: {
    back:function(){
      window.history.go(-1);
    },
    showAllCategory:function(){
      if(this.showAll){
        this.showAll = false;
      }else{
        this.showAll = true;
      }
    }
  },
  components: {}
}
</script>
