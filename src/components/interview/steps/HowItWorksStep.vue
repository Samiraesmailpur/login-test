<script>
import Button from '@/components/formElements/Button.vue';
export default {
  name: "HowItWorksStep",
  components: { Button },
}
</script>

<template>
  <div class="w-2/5 left-side sm:w-full sm:max-h-36">
    <img src="../../../assets/images/icons/illustration.jpg"
         class="w-full h-full sm:max-h-36 object-contain">
  </div>
  <div class="py-16 px-14 w-3/5 relative sm:w-full sm:h-full">
    <div class="flex flex-col gap-4">
      <h2 class="text-3xl font-light">How it works?</h2>
      <p class="font-light">
        <strong>It’s really easy.</strong> Questions have been prepared for you
        <strong>in advance</strong>, and you are simply required to record your answers to them
        <strong>using the camera and microphone</strong> of your computer, tablet, or phone.
      </p>
      <p class="font-light">Don’t worry if something goes wrong during the recording,
        <strong>these things happen</strong>.
        The good news is you can always completely start afresh using the original link provided, but please bear in mind, that SoftwareDoc will receive all of the recordings you submit.
      </p>
    </div>
    <Button @click="$emit('next-step')" class="mt-12" kind="primary">
      Next
    </Button>
    <button @click="$emit('previous-step')"
              class="text-primary flex items-center previous-btn border-primary absolute bottom-3.5 text-xs font-medium">
      <inline_svg class="fill-primary" src="arrow-left" width="9" height="9"></inline_svg>
        Welcome
    </button>
  </div>
</template>
