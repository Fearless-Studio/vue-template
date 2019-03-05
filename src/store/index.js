import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

import userInfo from './modules/userInfo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userInfo,
  },
  getters,
});
