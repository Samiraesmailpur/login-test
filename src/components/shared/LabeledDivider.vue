<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="relative py-2">
    <hr class="border-t-gray-400"/>
    <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 bg-white text-gray-400">{{ label }}</span>
  </div>
</template>
