<template>
  <more-options
    @close="optionClose"
    :moreData="{
        ...moreData,
        position: {
          top: position.top + position.height / 2,
          left: position.left + position.width / 2
        }
      }"
  />
</template>

<script>
import moreOptions from "../moreOptions";
export default {
  props: ["position"],
  components: { moreOptions },
  data() {
    return {
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
  methods: {
    optionClose(name) {
      this.$emit("close", name);
    }
  }
};
</script>

<style>
</style>