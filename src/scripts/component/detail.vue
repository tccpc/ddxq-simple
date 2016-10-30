<template lang="html">
  <div class="detail-container">
    <header id="detail-head">
      <div class="left-h">
        <image v-on:click="back" src="./images/back.png" alt="" />
        <image v-if="isshow" src="./images/exit.png" alt="" />
        {{product.name}}
      </div>
      <image src="./images/detail-search.png" alt="" />
    </header>
    <section class="ontime">
      营业时间{{product.min_time}}~{{product.max_time}}
    </section>
    <section class="optionpart">
      <ul class="opt-select">
        <li v-for="category in product.category" v-on:click="switchSubpage($index)" v-bind:class="curIndex == $index ? 'active': ''">
          {{category}}
        </li>
      </ul>
      <ul class="opt-list" id="pro-scroll">
        <section>
          <template v-for="pro in product.products">
              <li v-if="pro.category_id == curIndex ||curIndex == 0">
                <div class="pro-infor">
                  <img v-bind:src="pro.proimg" alt="" />
                  <div class="pro-infor-txt">
                    <p class="pro-name">
                      {{pro.proname}}
                      <image v-if="pro.mark_new" src="./images/pronew.png" alt="" />
                    </p>
                    <b class="pro-price">
                      ￥{{pro.price}}
                    </b>
                  </div>
                </div>
                <image class="add-btn" src="./images/add_label.png">

                </image>

              </li>
          </template>
        </section>
      </ul>

    </section>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    data () {
      return {
        product:{},
        isshow:false,
        curIndex:0
      }
    },
    ready:function(){
      var params = this.$route.params.id;
      if(params == 2 ||params ==1 ||params ==4){

      }else{
        params = 4;
      }
      this.$http.get('./mock/detail'+params+'.json')
        .then((res) => {
          try{
            this.product = JSON.parse(res.data);
          }catch(e){
            this.product = res.data;
          }
          Vue.nextTick(function(){
            new IScroll('#pro-scroll',{
              click:true
            });
          })

        });
    },
    methods:{
      back:function(){
        window.history.go(-1);
      },
      switchSubpage:function(index){
        this.curIndex = index;
      }
    }

  }
</script>
