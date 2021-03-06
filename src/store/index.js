import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rooms: Array(10)
      .fill(0)
      .map((_, i) => ({ name: `Dev Room ${i}`, users: {} }))
  },
  mutations: {
    updateRooms(state, rooms) {
      state.rooms = rooms;
    }
  },
  getters: {
    roomArr: state => state.rooms.map(r => r.name)
  },
  actions: {
    allRooms: async ({ commit }) => {
      const { data } = await axios.get(`${process.env.VUE_APP_BASEURL}rooms`);
      commit("updateRooms", data);
    }
  },
  modules: {}
});
