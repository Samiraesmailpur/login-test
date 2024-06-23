<script setup>
import { defineAsyncComponent, ref, watchEffect } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  }
});

const svgRef = ref(null)

watchEffect(() => {
  svgRef.value = defineAsyncComponent(() =>
    import(`/src/assets/images/icons/${props.src}.svg?component`)
  );
});
</script>

<template>
  <component :is="svgRef" class="fill-current" />
</template>
