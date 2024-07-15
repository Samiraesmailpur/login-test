<script>
export default {
  name: "SearchInput",
};
</script>

<template>
  <div class="relative inline-block">
    <input type="text" placeholder="Search..." class="border border-solid border-gray-400 rounded-2xl	text-gray-500 w-52 h-10">
    <inline_svg class="absolute top-1/2	right-2.5	-translate-y-1/2 fill-gray-500" src="search" width="18" height="18"></inline_svg>
  </div>
</template>

<style scoped></style>
