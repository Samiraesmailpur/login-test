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
  label: {
    type: String,
    required: false,
  },
});
</script>

<template>

<div class="input relative w-full cursor-pointer hover:color-gray-700">
  <input :type="type" :name="name"
         class="w-full h-12 px-3 leading-2 border-2 border-solid border-gray-400 hover:border-gray-500">
  <label class="input label leading-none absolute bg-white p-1 text-gray-500">{{ label }}</label>
</div>


</template>

<style scoped>
.input {

}

.input .label {
  top: 0;
  left: 8px;
  transform: translate(0, -50%);
}
</style>
