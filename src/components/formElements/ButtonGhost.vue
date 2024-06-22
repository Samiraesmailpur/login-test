<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  link: {
    type: String,
    required: false,
    default: "#",
  },
});
</script>

<template>
  <RouterLink
    :to="link"
    class="flex items-center justify-center p-2 border border-solid rounded-full shrink-0"
  >
    {{ title }}
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
a {
  transition: 0.2s;
}

a.red {
  color: var(--secondary-color);
  border-color: var(--secondary-color);
}

a.red:hover {
  color: var(--white-color);
  background-color: var(--secondary-color);
}

a:not(.red) {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

a:not(.red):hover {
  color: var(--white-color);
  background-color: var(--primary-color);
}

.appended {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
</style>
