<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button type="submit" class="flex items-center justify-center p-5 rounded-full w-full">
    {{ title }}
  </button>
</template>

<style scoped>
button {
  background-color: var(--secondary-color);
}
</style>
