<template>
  <header class="header flex pt-3 flex-wrap items-center sticky">
    <p class="flex-1 text-left px-2 font-bold text-2xl">WhatsApp</p>
    <span class="material-icons mr-2">search</span>

    <!-- more options -->
    <span
      tabindex="0"
      class="moreopts material-icons p-2"
      @keypress.enter="toggle"
      @click="toggle"
      ref="more"
      >more_vert</span
    >
    <more-options
      v-if="show"
      @close="optionClose"
      :moreData="{
        ...moreData,
        position: {
          top: morePos.top + morePos.height / 2,
          left: morePos.left + morePos.width / 2
        }
      }"
    />

    <!-- pages -->
    <section class="section pt-6 relative">
      <ul class="flex items-center cursor-pointer" id="pages">
        <li
          tabindex="0"
          class="flex pb-2 px-2"
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
          <span
            class="bg-white h-6 inline-block rounded-full w-6 text-black mx-1"
            >{{ this.roomLen }}</span
          >
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
  box-shadow: 0 2px 5px black;
  top: -60px;
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
import { mapGetters } from "vuex";
export default {
  components: {
    moreOptions
  },
  data() {
    return {
      show: false,
      tabs: ["CAM", "CHATS", "STATUS", "CALLS"],
      tab: 0,
      moreData: {
        options: [
          {
            name: "New Group"
          },
          {
            name: "New Broadcast"
          },
          {
            name: "Settings"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["roomArr"]),
    roomLen() {
      return this.roomArr.length;
    },
    morePos() {
      return this.$refs.more.getBoundingClientRect();
    }
  },
  mounted() {
    this.activeTab(1);
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    optionClose(name) {
      name && this.$emit("add", name);
      this.toggle();
    },
    activeTab(index) {
      this.tab = index;
      this.highlight();
    },
    highlight() {
      let el = document.querySelector(".highlighter"),
        idx = this.tab,
        li = document.querySelectorAll("#pages li")[idx],
        width = parseFloat(getComputedStyle(li).width);
      el.style.left = li.offsetLeft + "px";
      el.style.width = width + "px";
    }
  }
};
</script>
