<template>
  <div class="flex items-center p-1 w-screen overflow-hidden">
    <div class="">
      <Avatar />
    </div>
    <div
      class="w-full my-1 mx-2 text-left flex-1 overflow-hidden border-gray-400 border-b border-solid text-black"
    >
      <p>{{ room.name }}</p>
      <p class="text-xs text-gray-600 font-light pb-2 truncate">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
        consectetur laudantium minima ducimus sint officiis illum fuga.
      </p>
    </div>
  </div>
</template>
<script>
import Avatar from "./avatar";
export default {
  props: ["room"],
  components: {
    Avatar
  }
};
</script>
