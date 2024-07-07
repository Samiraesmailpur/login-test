<script>
export default {
  name: "PrimaryButton",
  props: {
    title: String,
    link: { type: String, default: "#" },
  }
};
</script>

<template>
  <RouterLink
    :to="link"
    class="flex items-center justify-center p-3 rounded-full text-white shrink-0"
  >
    {{ title }}
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
a {
  transition: .2s;
  color: var(--white-color);
}

a.red {
  background-color: var(--secondary-color);
}

a.red:hover {
  background-color: var(--secondary-color-dark);
}

a:not(.red) {
  background-color: var(--primary-color);
}

a:not(.red):hover {
  background-color: var(--primary-color-dark);
}
</style>
