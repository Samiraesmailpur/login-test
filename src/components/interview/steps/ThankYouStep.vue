<script>
import Button from '@/components/formElements/Button.vue';
import TextAreaComponent from '@/components/formElements/TextAreaComponent.vue';
import SuccessNotification from '@/components/shared/SuccessNotification.vue';
export default {
  name: "ThankYouStep",
  components: { Button, TextAreaComponent, SuccessNotification }
}
</script>

<template>
  <div class="w-2/5 left-side sm:w-full sm:max-h-36">
    <img src="../../../assets/images/icons/illustration.jpg"
         class="w-full h-full sm:max-h-36 object-contain">
  </div>

  <div class="py-16 px-14 w-3/5 relative sm:w-full sm:h-full">
    <div class="flex flex-col gap-4">
      <h2 class="text-3xl font-light">Thank you!</h2>
      <SuccessNotification>
        <strong>Congratulations</strong>, the video interview has now finished and your recording has been successfully submitted.
      </SuccessNotification>
      <p class="font-light">
        <strong>"SoftwareDoc"</strong>.
        will now need some time to review all the video interviews submitted by candidates. Should SoftwareDoc wish to progress you through the interview process, they will be in contact within the next few days.
      </p>
      <p class="font-light">
        <strong>
          Thank you.
        </strong>
      </p>
      <div>
        <Button kind="primary">Make one more recording</Button>
        <p class="text-xs font-light">The company will see all your attempts</p>
      </div>
      <hr>
      <p class="font-light">If you have any feedback on using our platform, or any ideas and suggestions on how to improve it, please leave them here:</p>
      <div>
        <div class="flex items-center justify-between gap-4">
          <TextAreaComponent label="your feedback" rows="2" class="flex-1"/>
          <Button kind="primary" class="max-w-36 w-full">Submit</Button>
        </div>
        <p class="text-xs font-light">Your message will be sent only to the administrators of the Playhunt, the potential employer who prepared the interview for you will not see it</p>
      </div>
      <p>Otherwise, thanks again for your time today, you may now close this window.</p>
    </div>
    <slot></slot>
  </div>
</template>
