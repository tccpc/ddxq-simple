import Vue from 'vue';
// import store from './common/store-gem2.0.3.js'
import "../styles/usage/page/app.scss";
import index from './component/index.vue';
import main from './component/main.vue';
import neighbor from './component/neighbor.vue';
import service from './component/service.vue';
import my from './component/my.vue';
import detail from './component/detail.vue';
import select from './component/select.vue';

import takeout from './component/takeout.vue'; //外卖（4个）
import aunt from './component/aunt.vue'; //阿姨
import clear from './component/clear.vue'; //清洗
import commission from './component/commission.vue'; //代办
import neicircle from './component/neicircle.vue'; //邻里团
import neicircledetail from './component/neicircledetail.vue'; //邻里团详情
import indent from './component/indent.vue'; //邻里团详情订单页
import applyhead from './component/applyhead.vue'; //报名团长
import bbs from './component/bbs.vue'; //论坛
import market from './component/market.vue'; //二手市场
import marketdetail from './component/marketdetail.vue';//二手市场详情页
import numbersense from './component/numbersense.vue'; //应急号码通
import senselists from './component/senselists.vue';//应急列表
import sensedetail from './component/sensedetail.vue';//应急详情
import login from './component/login.vue';
import mydetail from './component/mydetail.vue';
import guide from './component/guide.vue';
import setName from './component/setName.vue';
import setDescribe from './component/setDescribe.vue';
import setTel from './component/setTel.vue';
import setSex from './component/setSex.vue';
import buycar from './component/buycar.vue';

import Vuex from './libs/vuex.min.js';
import VueRouter from './libs/vue-router';
import VueResource from './libs/vue-resource';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

import store from './vuex/store.js';
import commonUtil from './common/common.js';
commonUtil.myScroll();

let router = new VueRouter();
let App = Vue.extend({
  store: store
});
router.map({
  '/': {
    component: guide
  },
  '/index':{
    component: index,
    subRoutes: {
      '/': {
        component: main
      },
      '/neighbor': {
        component: neighbor
      },
      '/my': {
        component: my
      },
      '/service': {
        component: service
      }
    }
  },
  '/detail/:id': {
    name: 'detail',
    component: detail
  },
  '/select':{ //小区选择页面
    component: select
  },
  '/takeout/:id': {
    name : 'takeout',
    component:takeout
  },
  '/aunt': {
    component:aunt
  },
  '/clear': {
    component:clear
  },
  '/commission': {
    component:commission
  },
  '/neicircle': {
    component:neicircle
  },
  '/neicircledetail/:id': {
    name : 'neicircledetail',
    component:neicircledetail
  },
  '/indent': {
    component:indent
  },
  '/applyhead': {
    component:applyhead
  },
  '/bbs': {
    component:bbs
  },
  '/market': {
    component:market
  },
  '/marketdetail': {
    component:marketdetail
  },
  '/numbersense': {
    component:numbersense
  },
  '/senselists/:id': {
    name:'senselists',
    component:senselists
  },
  '/sensedetail/:id': {
    name: 'sensedetail',
    component:sensedetail
  },
  '/login': {
    component:login
  },
  '/mydetail': {
    component:mydetail
  },
  '/setName': {
    component:setName
  },
  '/setSex': {
    component:setSex
  },
  '/setDescribe': {
    component:setDescribe
  },
  '/setTel': {
    component:setTel
  },
  '/buycar': {
    component:buycar
  }
});

router.start(App,'body');
