let VueMerchant = {};

import merchant from './vue-merchant.vue';

VueMerchant.install = function() {
  Vue.component('vue-merchant',merchant);
}

export default VueMerchant;
