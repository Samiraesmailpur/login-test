<script>
import Button from "../formElements/Button.vue";

export default {
  name: "AppHeader",
  props: {
    isOpen: Boolean,
  },
  components: { Button },
  methods: {
    toggleAside() {
      this.$emit('toggle-aside', !this.isOpen);

    }
  }
};
</script>

<template>
  <div class="py-2 px-4 bg-white shadow-round shadow-gray-300">
    <div class="flex w-full justify-between items-center">
      <div class="flex items-center gap-1">
        <inline_svg src="burger" width="30" height="30" @click="toggleAside" class="cursor-pointer burger"></inline_svg>
        <Button title="English" />
      </div>
      <RouterLink to="/"> logo </RouterLink>
      <div class="flex items-center gap-3.5">
        <RouterLink to="/" class="duration-200 text-white bg-emerald-700	hover:bg-emerald-800 text-center py-1.5 px-1.5 rounded-lg text-xs font-black sm:hidden">
          <span class="text-lg font-black">14</span>
          <hr />
          інтерв'ю
        </RouterLink>
        <div class="text-xl font-medium text-white bg-cyan-500 hover:bg-primary w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
          TE
        </div>
      </div>
    </div>
  </div>
</template>
