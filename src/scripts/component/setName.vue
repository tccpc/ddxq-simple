<template lang="html">
<div class="setName">
  <header>
    <div class="">
      <img src="/android_asset/www/images/back.png" alt="" v-on:click="back" />
      <span>修改昵称</span>
    </div>
    <span class="save" @click="save">保存</span>
  </header>
  <div class="input-box">
    <input type="text" name="name" v-model="name" placeholder="请输入昵称">
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name:''
    }
  },
  computed: {},
  mounted () {},
  methods: {
    back:function(){
      window.history.go(-1);
    },
    save:function(){
      var userStore = new store();
      var user = userStore.get('user');
      var userData =userStore.get('userData');
      var index = '';
      if(this.name !==""){
        for (var i=0;i<userData.length;i++){
          if(userData[i].tel===user.tel){
            index = i;
            break;
          }
        }
        userData[index].name = this.name;
        user.name = this.name;
        userStore.set('user',user);
        userStore.set('userData',userData);
        // window.history.go(-1);
      }else{

      }
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
