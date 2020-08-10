import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

Vue.config.productionTip = false;
import ActionHelper from "./store/ActionHelper";
import ItemData from "./dataModel/ItemData";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

// const ah = new ActionHelper();
// const item = new ItemData(1, 1, "马飞飞", "咯破喂他吃");

// ah.add(item)
