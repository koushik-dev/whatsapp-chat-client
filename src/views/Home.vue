<template>
  <div class="home text-white">
    <home-header @add="groupAdd" />
    <router-link
      :to="'/chat/' + room.name"
      v-for="(room, index) in rooms"
      :key="index"
    >
      <user-card :room="room" />
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex";
import userCard from "../components/userCard";
import homeHeader from "../components/homeHeader";
export default {
  components: {
    userCard,
    homeHeader
  },
  computed: mapState(['rooms']),
  methods: {
    groupAdd(name) {
      this.rooms.push({
        name
      });
    }
  }
};
</script>
