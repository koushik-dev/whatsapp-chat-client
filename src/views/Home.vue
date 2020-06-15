<template>
  <div class="home text-white">
    <home-header />
    <router-link :to="'/chat/'+ room.name" v-for="(room, index) in rooms" :key="index">
      <user-card :room="room" />
    </router-link>
  </div>
</template>
<script>
import userCard from "../components/userCard";
import homeHeader from "../components/homeHeader";
export default {
  components: {
    userCard,
    homeHeader
  },
  data() {
    return {
      rooms: {}
    };
  },
  mounted() {
    this.$axios.get(`http://localhost:3000/rooms`).then(({ data }) => {
      this.rooms = data
    });
  },
  methods: {}
};
</script>
