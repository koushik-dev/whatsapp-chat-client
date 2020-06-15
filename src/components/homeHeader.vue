<template>
  <header class="header flex pt-3 flex-wrap items-center">
    <p class="flex-1 text-left px-2">Whatsapp</p>
    <span class="material-icons mr-2">search</span>
    <!-- more options -->
    <span
      tabindex="0"
      class="moreopts material-icons p-2"
      @keypress.enter="toggle"
      @click="toggle"
      >more_vert</span
    >
    <more-options v-if="show" @close="toggle" />

    <!-- pages -->
    <section class="section mt-6 relative">
      <ul class="flex items-center" id="pages">
        <li
          tabindex="0"
          class="flex pb-2"
          @keypress.enter="activeTab(0)"
          @click="activeTab(0)"
        >
          <span class="material-icons items-center">camera_alt</span>
        </li>
        <li
          tabindex="0"
          class="flex-1 pb-2"
          @keypress.enter="activeTab(1)"
          @click="activeTab(1)"
        >
          {{ this.tabs[1] }}
        </li>
        <li
          tabindex="0"
          class="flex-1 pb-2"
          @keypress.enter="activeTab(2)"
          @click="activeTab(2)"
        >
          {{ this.tabs[2] }}
        </li>
        <li
          tabindex="0"
          class="flex-1 pb-2"
          @keypress.enter="activeTab(3)"
          @click="activeTab(3)"
        >
          {{ this.tabs[3] }}
        </li>
      </ul>
      <div class="highlighter absolute bg-white bottom-0 h-1"></div>
    </section>
  </header>
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
import moreOptions from "../components/moreOptions";
export default {
  components: {
    moreOptions
  },
  data() {
    return {
      show: false,
      tabs: ["CAM", "CHATS", "STATUS", "CALLS"],
      tab: 1
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    activeTab(index) {
      this.tab = index;
      this.highlight();
    },
    highlight() {
      let el = document.querySelector(".highlighter"),
        idx = this.tab,
        width = parseFloat(
          getComputedStyle(document.querySelectorAll("#pages li")[idx]).width
        ),
        px = !idx ? 0 : width * (idx - 1) + 24;
      el.style.left = px + "px";
      el.style.width = width + "px";
    }
  }
};
</script>
