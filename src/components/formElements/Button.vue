<script>
const typeMap = {
  // GHOST BUTTON STYLES
  "ghost-primary": "text-primary border-primary hover:text-white hover:bg-primary",
  "ghost-red": "text-secondary border-secondary hover:text-white hover:bg-secondary",
  "ghost-green": "text-green border-green hover:text-white hover:bg-green",
  "ghost-aqua": "text-aqua border-aqua hover:text-white hover:bg-aqua",
  "ghost-black": "bg-black text-white border-black hover:text-white hover:bg-primary hover:border-primary",
  // PRIMARY BUTTON STYLES
  "primary": "bg-primary text-white hover:bg-primary-dark",
  "primary-red": "bg-secondary hover:bg-secondary-dark border-secondary text-white",
  "primary-aqua": "bg-aqua hover:bg-aqua-dark text-white"
}

export default {
  name: "Button",
  props: {
    title: String,
    link: { type: String, default: "#" },
    kind:  { type: String, default: "ghost-primary" }
  },
  data() {
    return {
      typeMap: typeMap,
    };
  },
};
</script>

<template>
  <RouterLink :to="link" class="flex items-center justify-center text-xs p-3 border border-solid rounded-full shrink-0"
              :class="this.typeMap[kind]">
    {{ title }}
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
a {
  transition: 0.2s;
}

.appended {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
</style>
