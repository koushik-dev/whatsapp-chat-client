import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import axios from "axios";

import "./assets/styles/tailwind.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("https://vast-mesa-14194.herokuapp.com/")
  })
);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
