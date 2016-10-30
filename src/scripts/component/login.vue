<template lang="html">
<div class="login-box">
  <header>
    <img src="/android_asset/www/images/back.png" alt="" v-on:click="back" />
    <span>登录/注册</span>
  </header>
  <ul class="input-ul">
    <li>
      <input type="text" name="name" placeholder="手机号码（新号码自动注册）" v-model="tel">
    </li>
    <li>
      <input type="password" name="name" placeholder="密码" v-model="password">
    </li>
  </ul>
  <input class="btn" type="button" name="name" value="登录"  v-on:click="login()">
  <span class="xieyi">点击“确定”按钮，即表示你同意《叮咚小区软件许可及服务协议》</span>
</div>
</template>

<script>
export default {
  data () {
    return {
      tel:'',
      password:'',
      userPath:'/index'
    }
  },
  computed: {},
  mounted () {},
  methods: {
    back:function(){
      window.history.go(-1);
    },
    login:function() {
      var myStore = new store();
      var users = myStore.get('userData');
      var isUser = false;
      var isLogin = false;
      var re = /^[1][0-9]{10}$/;
      let that = this;
      if (users){
        users.forEach(function(val){
          if(val.tel == that.tel){
            isUser = true;
            if(val.password == that.password){
              isLogin = true;
              return
            }else{
              return
            }
          }
        })
        if(!isUser){
          if(!re.test(this.tel)){
            console.log('请输入正确的手机号');
            return false;
          }
          myStore.set('user',{tel:this.tel});
          users.push({tel:this.tel,password: this.password})
          myStore.set('userData',users);
          window.history.go(-1);
          return true;
        }else if(isLogin){
          if(!re.test(this.tel)){
            console.log('请输入正确的手机号');
            return false;
          }
          myStore.set('user',{tel:this.tel});
          window.history.go(-1);
          return true;
        }else{
          console.log("账号密码错误！");
          this.userPath = '';
          return false;
        }
      }else{
        if(!re.test(this.tel)){
          console.log('请输入正确的手机号');
          return false;
        }
        myStore.set('user',{tel:this.tel});
        myStore.set('userData',[{tel:this.tel,password: this.password}]);
        window.history.go(-1);
        return true;
      }
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
