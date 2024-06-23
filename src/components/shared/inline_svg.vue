<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  }
});

const svg = defineAsyncComponent(() =>
  import(`@/assets/images/icons/${props.src}.svg?component`)
);
</script>

<template>
  <component :is="svg" class="fill-current" />
</template>
