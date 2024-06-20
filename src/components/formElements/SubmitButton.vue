<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <button
    type="submit"
    class="flex items-center justify-center p-4 rounded-full w-full font-semibold text-white max-w-40 sm:max-w-full sm:p-3"
  >
    {{ title }}
  </button>
</template>

<style scoped>
button {
  background-color: var(--secondary-color);
}
</style>
