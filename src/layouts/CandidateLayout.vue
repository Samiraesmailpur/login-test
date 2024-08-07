<script>
export default {
  name: "CandidateLayout"
};
</script>

<template>
  <header class="fixed top-0 w-full py-5 px-4 bg-white shadow-round shadow-gray-300 text-center z-50">
    <RouterLink to="/">logo</RouterLink>
  </header>
  <main class="flex items-center justify-center text-base">
    <RouterView />
  </main>
</template>
