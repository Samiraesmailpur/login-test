<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  }
});

const svg = defineAsyncComponent(() =>
  import(`/src/assets/images/icons/${props.src}.svg`)
);
</script>

<template>
  <component :is="svg" class="fill-current" />
</template>
