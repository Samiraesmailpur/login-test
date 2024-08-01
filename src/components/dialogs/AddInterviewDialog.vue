<script>
import InterviewForm from "../forms/InterviewForm.vue";
import Button from "../formElements/Button.vue";

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
    closeDialog() {
      this.$refs.dialogRef.close();
    }
  },
  mounted() {
    const triggerElement = document.getElementById(this.triggerId);
    if (triggerElement) {
      triggerElement.addEventListener('click', this.openDialog);
    }
  },
  components: { InterviewForm, Button },
}
</script>

<template>
  <dialog ref="dialogRef"
          id="addInterviewDialog"
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-sm w-full max-w-3xl sm:h-screen">

    <div class="flex justify-between items-center p-4 mb-4 border-b border-solid border-gray-200">
      <h2 class="text-lg font-medium">Add a new Interview</h2>

      <div class="flex">
        <Button title="Settings" class="px-5 py-3" kind="primary" />
        <button @click="closeDialog" class="px-4">
          <inline_svg src="cross" width="12" height="12"></inline_svg>
        </button>
      </div>
    </div>

    <InterviewForm />

    <div class="flex justify-end gap-4 p-4 border-t border-solid border-gray-200">
      <Button @click="closeDialog" title="Cancel" class="w-32" />
      <Button @click="closeDialog" title="Save" class="w-32" kind="primary"/>
    </div>
  </dialog>
</template>
