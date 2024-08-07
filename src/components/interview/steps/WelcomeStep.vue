<script>
import Button from '@/components/formElements/Button.vue';
export default {
  name: "WelcomeStep",
  components: { Button },
}
</script>

<template>
  <div class="w-2/5 left-side sm:w-full sm:max-h-36">
    <img src="../../../assets/images/icons/illustration.jpg"
         class="w-full h-full sm:max-h-36 object-contain">
  </div>
  <div class="py-16 px-14 w-3/5 relative sm:w-full sm:h-full">
    <div class="flex flex-col gap-4 font-medium">
      <h2 class="text-3xl font-light">Welcome</h2>
      <p class="font-light">
        <strong>SoftwareDoc</strong> has invited you to submit a video interview:
      </p>
      <p>
        Topic1
      </p>
      <p class="font-light">
        This service is designed to record your video interview
        <span class="text-primary">at a time and place convenient to you</span>
      </p>
    </div>
    <Button @click="$emit('next-step')" class="mt-12" kind="primary">
      Next
    </Button>
  </div>
</template>
