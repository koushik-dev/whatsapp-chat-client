<template>
  <ul
    class="z-10 bg-white text-black text-left absolute right-0"
    :style="{ right: '5px', top: '5px' }"
    id="popup"
  >
    <li class="opt py-2 pl-3 cursor-pointer hover:bg-gray-300 pr-6">
      <a href="javascript:void(0)" class="opt" @click="add('group')">New group</a>
    </li>
    <li class="opt py-2 pl-3 cursor-pointer hover:bg-gray-300 pr-6">
      <a href="javascript:void(0)" class="opt" @click="add('broadcast')">New broadcast</a>
    </li>
    <li class="opt py-2 pl-3 cursor-pointer hover:bg-gray-300 pr-6">
      <a href="javascript:void(0)" class="opt">Settings</a>
    </li>
  </ul>
</template>
<script>
export default {
  mounted() {
    document.addEventListener("click", this.globalClick);
  },
  methods: {
    add(type) {
      let name;
      switch (type) {
        case "group":
          while (!name) {
            name = prompt("Enter group name");
          }
          this.$socket.emit("create-group", name);
          this.emitAndClean(name);
          break;
        case "broadcast":
          break;
        default:
          break;
      }
    },
    globalClick(e) {
      const isOpts = [...e.target.classList].some(
        c => ["moreopts", "opt"].indexOf(c) > -1
      );
      if (isOpts) {
        this.emitAndClean();
      }
    },
    emitAndClean(name) {
      this.$emit("close", name);
      document.removeEventListener("click", this.globalClick);
    }
  }
};
</script>
