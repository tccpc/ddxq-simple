<template lang="html">
  <div class="det-box">
    <header>
      <img src="/android_asset/www/images/back.png" alt="" v-on:click="back" />
      <span>个人资料</span>
    </header>
    <ul class="input-ul">
      <li>
        <span>头像</span>
        <div class="ul-right">
          <img id="choose" @click="camera" class="myImg" src="/android_asset/www/images/my.png" alt="" />
          <img class="rightImg" src="/android_asset/www/images/right.png" alt="" />
        </div>
      </li>
      <li v-link="{path:'/setName'}">
        <span>昵称</span>
        <div class="ul-right">
          <span>{{user.name||"请设置"}}</span>
          <img class="rightImg" src="/android_asset/www/images/right.png" alt="" />
        </div>
      </li>
      <li v-link="{path:'/setSex'}">
        <span>性别</span>
        <div class="ul-right">
          <span>{{user.sex||"请设置"}}</span>
          <img class="rightImg" src="/android_asset/www/images/right.png" alt="" />
        </div>
      </li>
      <li v-link="{path:'/setTel'}">
        <span>手机号</span>
        <div class="ul-right">
          <span>{{user.tel||"请设置"}}</span>
          <img class="rightImg" src="/android_asset/www/images/right.png" alt="" />
        </div>
      </li>
      <li>
        <span>绑定微信账号</span>
        <div class="ul-right">
          <span>{{user.weixi||"请设置"}}</span>
          <img class="rightImg" src="/android_asset/www/images/right.png" alt="" />
        </div>
      </li>
      <li v-link="{path:'/setDescribe'}">
        <span>个人描述</span>
        <div class="ul-right">
          <span>{{user.describe||"请设置"}}</span>
          <img class="rightImg" src="/android_asset/www/images/right.png" alt="" />
        </div>
      </li>
    </ul>
    <div class="logout" @click="logout" v-link="{path:'/index'}">
      退出登陆
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:{}
    }
  },
  ready:function(){
    var userStore = new store();
    this.user = userStore.get('user');
    try{

    }catch(e){

    }
  },
  computed: {},
  mounted () {},
  methods: {
    back:function(){
      window.history.go(-1);
    },
    logout:function(){
      var myStore = new store();
      myStore.remove('user');
    },
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

<style lang="css">
</style>
