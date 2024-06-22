<script setup>
defineProps({
  label: String,
  name: {
    type: String,
    required: true,
  },
  rows: {
    type: String,
    required: false,
    default: "5",
  }
});
</script>

<template>
<div class="input relative cursor-pointer hover:color-gray-700">
  <textarea :name="name"
            :rows="rows"
            class="w-full px-3 pt-2 leading-2 border border-solid border-gray-400 hover:border-gray-500">
  </textarea>
  <label v-if="$props.label" class="input label left-2 top-0 -translate-y-2/4 leading-none absolute bg-white p-1 text-gray-500">{{ label }}</label>
</div>
</template>
