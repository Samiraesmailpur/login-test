<script>
import InterviewForm from "../forms/InterviewForm.vue";
import ButtonGhost from "../formElements/ButtonGhost.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";

export default {
  name: "AddInterviewDialog",
  props: {
    triggerId: {
      type: String,
      required: true,
    }
  },
  methods: {
    openDialog() {
      this.$refs.dialogRef.showModal();
    },
  },
  mounted() {
    const triggerElement = document.getElementById(this.triggerId);
    if (triggerElement) {
      triggerElement.addEventListener('click', this.openDialog);
    }
  },
  components: { InterviewForm, ButtonGhost, PrimaryButton },
}
</script>

<template>
  <dialog ref="dialogRef"
          id="addInterviewDialog"
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-sm w-full max-w-3xl sm:h-screen">
    <InterviewForm title="Add a new Interview" :dialog="this.$refs.dialogRef" />

    <div class="flex justify-end gap-4 p-4 border-t border-solid border-gray-200">
      <ButtonGhost title="Cancel" class="w-32" />
      <PrimaryButton title="Save" class="w-32"/>
    </div>
  </dialog>
</template>
