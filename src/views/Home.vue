<template>
  <div class="home text-white">
    <home-header @add="groupAdd" />
    <div class="bg-white overflow-hidden">
      <router-link
      :to="'/chat/' + room.name"
      v-for="(room, index) in rooms"
      :key="index"
    >
      <room-card :room="room" />
    </router-link>
    </div>
    
  </div>
</template>
<script>
import { mapState } from "vuex";
import roomCard from "../components/roomCard";
import homeHeader from "../components/homeHeader";
export default {
  components: {
    roomCard,
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
