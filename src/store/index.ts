import Vue from "vue";
import Vuex from "vuex";
import ActionHelper from "./ActionHelper";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ah: new ActionHelper(),
    showEdit: false,
    item: null,
    cateId: -1,
  },
  mutations: {
    toggleEdit(state) {
      state.showEdit = !state.showEdit;
    },
    editItem(state, item) {
      state.item = item;
    },
    changeCateId(state, id) {
      state.cateId = id;
    },
  },
});

export default store;
