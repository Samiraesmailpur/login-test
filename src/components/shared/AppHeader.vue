<script>
import ButtonGhost from "../formElements/ButtonGhost.vue";

export default {
  name: "AppHeader",
  components: { ButtonGhost },
};
</script>

<template>
  <div class="py-2 px-14 sm:px-4 bg-white shadow-round shadow-gray-300">
    <div class="flex w-full justify-between items-center">
      <ButtonGhost class="text-sm py-2 px-4"title="English" />
      <RouterLink to="/">logo</RouterLink>
      <div class="flex items-center gap-3.5">
        <RouterLink to="/" class="text-white bg-green-700 hover:bg-green-800 text-center py-1.5 px-1.5 rounded-lg text-xs font-black">
          <span class="text-lg font-black">14</span>
          <hr />
          інтерв'ю
        </RouterLink>

        <div class="text-xl font-semibold text-white bg-cyan-500 hover:bg-primary
                   w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
          TE
        </div>
      </div>
    </div>
  </div>
</template>
