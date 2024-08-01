<script>
export default {
  name: "LabeledDivider",
  props: {
    label: {
      type: String,
      required: true,
    },
  }
};
</script>

<template>
  <div class="relative py-2">
    <hr class="border-t-gray-300"/>
    <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 bg-white text-sm text-gray-300">{{ label }}</span>
  </div>
</template>
