<template>
  <div class="home text-white">
    <header class="header flex pt-3 flex-wrap">
      <p class="flex-1 text-left px-2">Whatsapp</p>
      <span class="material-icons mr-2">search</span>
      <span class="material-icons">more_vert</span>
      <section class="section mt-6 relative">
        <ul class="flex list-none items-center">
          <li class="flex pb-2" @click="activeTab(0)"><span class="material-icons items-center">camera_alt</span></li>
          <li class="flex-1 pb-2" @click="activeTab(1)">{{this.tabs[1]}}</li>
          <li class="flex-1 pb-2" @click="activeTab(2)">{{this.tabs[2]}}</li>
          <li class="flex-1 pb-2" @click="activeTab(3)">{{this.tabs[3]}}</li>
        </ul>
        <div class="highlighter absolute bg-white bottom-0 h-1"></div>
      </section>
    </header>
    <user-card/>
  </div>
</template>
<style scoped>
.header {
  background-color: var(--app-color);
}
.section {
  flex: 1 100%;
}
.highlighter {
  transition: all 0.25s ease-in-out;
}
</style>
<script>
import userCard from "../components/userCard";
export default {
  components: {
    userCard
  },
  data() {
    return {
      tabs: ['CAM', 'CHATS', 'STATUS', 'CALLS'],
      tab: 1
    }
  },
  methods: {
    activeTab(index) {
      this.tab = index;
      this.highlight();
    },
    highlight() {
      let el = document.querySelector('.highlighter'),
      idx = this.tab,
      width = parseFloat(getComputedStyle(document.querySelectorAll('li')[idx]).width),
      px = !idx ? 0 : (width * (idx - 1) + 24);
      el.style.left = px + 'px';
      el.style.width = width + 'px';
    }
  }
}
</script>