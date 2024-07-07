<script>
import ButtonGhost from "../formElements/ButtonGhost.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";
import TextAreaComponent from "../formElements/TextAreaComponent.vue";

export default {
  name: "AddEmailsDialog",
  props: {
    triggerId: {
      type: String,
      required: true,
    }
  },
  methods: {
    openDialog() {
      this.$refs.dialogRef.showModal();
    }
  },
  mounted() {
    const triggerElement = document.getElementById(this.triggerId);
    if (triggerElement) {
      triggerElement.addEventListener('click', this.openDialog);
    }
  },
  components: { ButtonGhost, PrimaryButton, TextAreaComponent },
}
</script>

<template>
  <dialog ref="dialogRef"
          class="absolute top-1/2 left-1/2 divide-y -translate-y-1/2 -translate-x-1/2 rounded-sm w-full max-w-xl sm:h-screen">
    <div class="p-8">
      <h1>Add emails</h1>
    </div>
    <div class="p-8">
      <TextAreaComponent label="Candidates' email addresses. One per line"/>
    </div>
    <div class="p-8">
      <PrimaryButton title="Save" class="w-32"/>
    </div>
  </dialog>
</template>
