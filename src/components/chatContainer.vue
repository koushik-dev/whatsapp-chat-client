<template>
  <div class="chat-container flex flex-col h-screen">
    <header class="chat__header flex px-1 py-2 items-center text-white">
      <span class="material-icons">keyboard_backspace</span>
      <Avatar/>
      <div class="header__title flex flex-col justify-start ml-2 flex-1 text-left">
        <p>Jane Doe</p>
        <p class="header__title__status font-light">Last seen now</p>
      </div>
      <span class="material-icons mx-2">call</span>
      <span class="material-icons">more_vert</span>
    </header>
    <div class="container__messages flex flex-col overflow-y-scroll h-full">
      <message-card v-for="msg in messages" :key="msg.id" :msg="msg"></message-card>
    </div>
    <messageForm @ping="appendMsg" />
  </div>
</template>

<script>
import messageCard from "./messageCard.vue";
import messageForm from "./messageForm.vue";
import Avatar from "./avatar.vue";
export default {
  components: {
    messageCard,
    messageForm,
    Avatar
  },
  data() {
    return {
      messages: []
    };
  },
  sockets: {
    incomingMessage(data) {
      this.messages.push(data);
      this.scrollToLatest();
    }
  },
  methods: {
    appendMsg(msg) {
      this.messages.push({
        id: Math.random(),
        text: msg,
        timeStamp: new Date(),
        name: "Jane Doe",
        mine: true
      });
      let el = document.querySelector(".container__messages");
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 0);
      this.scrollToLatest();
    },
    scrollToLatest() {
      let el = document.querySelector(".container__messages");
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat__header {
  background-color: var(--app-color);
}
.header__title__status {
  font-size: 12px;
}
</style>
