<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="link"
    class="flex items-center justify-center p-3 rounded-full w-full"
  >
    {{ title }}
  </RouterLink>
</template>

<style scoped>
a {
  transition: 0.2s;
  background-color: var(--secondary-color-ghost);
}
</style>
