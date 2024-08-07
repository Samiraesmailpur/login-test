<script>
import Button from '@/components/formElements/Button.vue';
export default {
  name: "TroubleStep",
  components: { Button },
}
</script>

<template>
  <div class="w-2/5 left-side sm:w-full sm:max-h-36">
    <img src="../../../assets/images/icons/illustration.jpg"
         class="w-full h-full sm:max-h-36 object-contain">
  </div>
  <div class="py-16 px-14 w-3/5 relative sm:w-full sm:h-full">
    <div>
      <h2 class="text-3xl font-light mb-12">Having trouble with recording</h2>
    </div>
    <Button @click="$emit('next-step')" class="mt-12" kind="primary">
      Next
    </Button>
    <button @click="$emit('previous-step')"
              class="text-primary flex items-center previous-btn border-primary absolute bottom-3.5 text-xs font-medium">
      <inline_svg class="fill-primary" src="arrow-left" width="9" height="9"></inline_svg>
      How it works?
    </button>
  </div>
</template>