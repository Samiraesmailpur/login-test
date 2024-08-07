<script>
import Button from '@/components/formElements/Button.vue';
import Interview from './Interview.vue';
export default {
  name: "GetReadyStep",
  data() {
    return {
      isStartInterview: false,
    }
  },
  components: { Button, Interview },
}
</script>

<template>
  <div class="w-2/5 left-side sm:w-full sm:max-h-36">
    <img src="../../../assets/images/icons/illustration.jpg"
         class="w-full h-full sm:max-h-36 object-contain">
  </div>
  <div class="py-16 px-14 w-3/5 relative sm:w-full sm:h-full">
    <div class="flex flex-col gap-4">
      <h2 class="text-3xl font-light">Ready to get started?</h2>
      <p class="font-light">Great, everything is ready for you to record your video interview.</p>
      <p class="font-light">After clicking the
        <strong>"Start Interview"</strong>.
        button below, the camera and microphone will turn on & you’ll see questions throughout the interview that you’ll need to answer.
      </p>
      <p class="font-light">
        <strong>
          Please note, you may need to grant permission on your device again to use your camera and microphone.
        </strong>
      </p>
      <p class="text-primary">Best of luck!</p>
      <Button kind="primary" @click="$emit('next-step')">Start Interview</Button>
    </div>
    <button @click="$emit('previous-step')"
              class="text-primary flex items-center previous-btn border-primary absolute bottom-3.5 text-xs font-medium">
      <inline_svg class="fill-primary" src="arrow-left" width="9" height="9"></inline_svg>
      "Step 2. Let's check your device"
    </button>
  </div>
</template>
