<template>
  <chatContainer />
</template>

<script>
import chatContainer from "@/components/chatContainer.vue";
export default {
  components: {
    chatContainer
  },
  mounted() {
    this.$socket.emit('join-group', this.$route.params.name, sessionStorage.getItem('user-name'));
  }
};
</script>
