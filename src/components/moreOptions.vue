<template>
  <ul
    class="z-10 bg-white text-black text-left absolute shadow-md"
    ref="list"
    :style="{ top: moreData.position.top + 'px' }"
    id="popup"
  >
    <li
      class="opt py-2 pl-3 cursor-pointer hover:bg-gray-300 pr-6"
      v-for="(opt, i) in moreData.options"
      :key="i"
    >
      <a href="javascript:void(0)" class="opt" @click="add('group')">{{
        opt.name
      }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["moreData"],
  mounted() {
    this.$refs.list.style.left =
      this.moreData.position.left - this.$el.offsetWidth + "px";
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
      if ([...e.target.classList].indexOf("moreopts") === -1) {
        const isOpts = [...e.target.classList].indexOf("opt") > -1;
        if (!isOpts) {
          this.emitAndClean();
        }
      }
    },

    emitAndClean(name) {
      this.$emit("close", name);
      document.removeEventListener("click", this.globalClick);
    }
  }
};
</script>
