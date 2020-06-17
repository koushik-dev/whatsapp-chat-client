import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import axios from "axios";

import "./assets/styles/tailwind.css";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO(process.env.VUE_APP_BASEURL)
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
