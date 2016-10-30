<template lang="html">
  <div class="my-container">
    <header class="myHeader">
      我
    </header>
    <div class="mybox">
      <div class="my" v-link="{path:userPath}">
        <div class="">
          <img id="choose" @click="camera" class="myImg" src="/android_asset/www/images/my.png" alt="" />
          <span class="name" >{{name}}</span>
        </div>
        <img class="rightImg" src="/android_asset/www/images/right.png" alt="" />
      </div>
      <div class="mylist">
        <ul class="my-top">
          <li>
            <img src="/android_asset/www/images/my1.png" alt="" />
            <div class="list-box listshead">
              <span>我的小区</span>
              <span>{{select}}</span>
            </div>
          </li>
          <li>
            <img src="/android_asset/www/images/my2.png" alt="" />
            <div class="list-box">
              <span>我的地址簿</span>
            </div>
          </li>
          <li>
            <img src="/android_asset/www/images/my3.png" alt="" />
            <div class="list-box">
              <span>我的订单</span>
            </div>
          </li>
          <li>
            <img src="/android_asset/www/images/my4.png" alt="" />
            <div class="list-box">
              <span>消息中心</span>
            </div>
          </li>
          <li>
            <img src="/android_asset/www/images/my5.png" alt="" />
            <div class="list-box">
              <span>我的叮咚券</span>
            </div>
          </li>
        </ul>

        <ul class="my-center">
          <li>
            <img src="/android_asset/www/images/my6.png" alt="" />
            <div class="list-box">
              <span>我的邻居</span>
            </div>
          </li>
          <li>
            <img src="/android_asset/www/images/my7.png" alt="" />
            <div class="list-box">
              <span>我的收藏</span>
            </div>
          </li>
        </ul>
        <ul class="my-bottom">
          <li>
            <img src="/android_asset/www/images/my8.png" alt="" />
            <div class="list-box">
              <span>应用设置</span>
            </div>
          </li>
          <li>
            <img src="/android_asset/www/images/my9.png" alt="" />
            <div class="list-box">
              <span>意见与建议</span>
            </div>
          </li>
          <li>
            <img src="/android_asset/www/images/my10.png" alt="" />
            <div class="list-box">
              <span>拨打服务电话</span>
            </div>
          </li>
        </ul>
        <div class="tit-bottom">
          服务时间:06:30-24:00
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { changeIndex } from "../vuex/action"
export default {
  data () {
    return {
      name:'立即登录',
      userPath:'/login',
      select:''
    }
  },
  vuex: {
    actions: {
     change: changeIndex
   }
  },
  ready:function(){
    this.change(3);
    var myStore = new store();
    var user = myStore.get('user');
    if (user){
      this.select = user.select;
      if(user.tel){
        this.name = user.name || '快来设置昵称吧';
        this.userPath = '/mydetail';
      }else{
        this.name = '立即登录';
      }
    }
  },
  computed: {},
  mounted () {},
  methods: {
    camera:function(){
      navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI });

      function onSuccess(imageURI) {
          var image = document.getElementById('choose');
          image.src = imageURI;
      }

      function onFail(message) {
          alert('Failed because: ' + message);
      }
    }
  },
  components: {}
}
</script>

<style lang="sass">
</style>
