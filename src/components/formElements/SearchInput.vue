<script>
export default {
  name: "SearchInput",
};
</script>

<template>
  <div class="relative inline-block">
    <input type="text" placeholder="Search..." class="border border-solid border-gray-300 rounded-2xl text-xs	text-gray-500 w-52 h-8">
    <inline_svg class="absolute top-1/2	right-2.5	-translate-y-1/2 fill-gray-500" src="search" width="12" height="12"></inline_svg>
  </div>
</template>

<style scoped></style>
