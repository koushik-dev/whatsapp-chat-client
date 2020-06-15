<template>
  <div>
    <header class="p-2 text-white font-medium text-xl text-left">
      <h3>Whatsapp</h3>
    </header>
    <section class="flex">
      <form @submit.prevent="login" :style="{ top: '50%' }" class="absolute">
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          class="border-b-2 border-green-800 px-2 py-3 rounded-t w-full bg-transparent"
        />
        <button
          type="submit"
          class="bg-green-800 font-medium m-2 p-2 rounded text-white"
        >
          Submit
        </button>
      </form>
    </section>
  </div>
</template>
<style scoped>
header {
  background-color: var(--app-color);
}
</style>
<script>
export default {
  methods: {
    login({ target: { elements } }) {
      let name = elements[0].value;
      if (name) {
        this.$router.push({ name: "Home", params: { name } });
      }
    }
  }
};
</script>
