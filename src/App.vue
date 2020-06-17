<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
@import "./assets/styles/theme.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  mounted() {
    this.$axios.get(`${process.env.VUE_APP_BASEURL}rooms`).then(({ data }) => {
      this.$store.commit('updateRooms', data);
    });
  },
}
</script>