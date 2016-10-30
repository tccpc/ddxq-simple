<template lang="html">
<div class="sensedetail-con">
  <header class="header">
    <div class="iconfont3" v-on:click="back">&#xe611;</div>
    <h1>{{sensedetailobj.merchantName}}</h1>
  </header>
  <div class="comment">
    <div class="tit">{{sensedetailobj.merchantName}}</div>
    <div class="commentcon">
      <b>*****</b>
      <span>{{sensedetailobj.ratingCount}}评论</span>
    </div>
  </div>
  <div class="numbercall">
    <i></i>
    <span>{{sensedetailobj.num}}</span>
  </div>
  <div class="time">
    <span>营业时间：{{sensedetailobj.min_time}}-{{sensedetailobj.max_time}}</span>
  </div>
<div class="footer">
  <!-- <i class="icon icon-account_box" style="font-size: 30px;"></i> -->
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      sensedetailobj:[]
    }
  },
  ready (){
    console.log(this.$route.params);
    console.log(0);
    this.$http.get('./mock/senselist1.json')
        .then((res) => {
        var resData = "";
        try {
          resData = JSON.parse(res.data);
        }catch (e) {
          resData = res.data;
        }
          console.log(res.data);
          this.senseobj = resData;
          console.log(this.$route.params);
          for(var i=0;i<resData.result.length;i++){
            if(resData.result[i].id==this.$route.params.id){
              this.sensedetailobj = resData.result[i];
            }
          }
        })
  },
  computed: {},
  mounted () {},
  methods: {
  back:function(){
    window.history.go(-1);
    }
  },
  components: {}
}
</script>
