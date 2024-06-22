<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: String,
});

</script>

<template>

<div class="flex">
  <slot v-if="$slots.prepend" name="prepend"></slot>

  <div class="input relative w-full cursor-pointer hover:color-gray-700">
    <input :type="type" :name="name"
           class="w-full h-12 px-3 leading-2 border border-solid border-gray-400 hover:border-gray-500">
    <label v-if="$props.label" class="input label left-2 top-0 -translate-y-2/4 leading-none absolute bg-white p-1 text-gray-500">{{ label }}</label>
  </div>

  <slot v-if="$slots.append" name="append"></slot>
</div>


</template>
