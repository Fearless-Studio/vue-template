import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './icons';

import './styles/index.scss';

import Mixin from './mixins';

Vue.mixin(Mixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
