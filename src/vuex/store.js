/*
 * @CreateTime: Sep 6, 2017 10:03 AM
 * @Author: Conroy
 * @Contact: 
 * @Last Modified By: Conroy
 * @Last Modified Time: Sep 6, 2017 11:53 AM
 * @Description: Modify Here, Please 
 */

import Vuex from 'vuex';
import Vue from 'vue';
import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

