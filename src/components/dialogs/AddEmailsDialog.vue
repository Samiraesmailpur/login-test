<script>
import Button from "../formElements/Button.vue";
import TextAreaComponent from "../formElements/TextAreaComponent.vue";

export default {
  name: "AddEmailsDialog",
  props: {
    triggerId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      textAreaValue: "",
      candidateEmails: [],
    };
  },
  methods: {
    openDialog() {
      this.$refs.dialogRef.showModal();
    },
    addCandidates(event) {
      this.candidateEmails = this.textAreaValue.split("\n");
      this.$emit("add-candidates", this.candidateEmails);
      this.$refs.dialogRef.close();
    },
  },
  mounted() {
    const triggerElement = document.getElementById(this.triggerId);
    if (triggerElement) {
      triggerElement.addEventListener("click", this.openDialog);
    }
  },
  components: { Button, TextAreaComponent },
};
</script>

<template>
  <dialog ref="dialogRef" class="absolute top-1/2 left-1/2 divide-y -translate-y-1/2 -translate-x-1/2 rounded-sm w-full max-w-xl sm:h-screen">
    <div class="p-8">
      <h1 class="text-xl">Add emails</h1>
    </div>
    <div class="p-8">
      <TextAreaComponent label="Candidates' email addresses. One per line"
                         :textAreaValue="textAreaValue"
                         @on-input="textAreaValue = $event"/>
    </div>
    <div class="p-8 flex justify-end">
      <Button @click="addCandidates" title="Save" class="w-32" kind="primary" />
    </div>
  </dialog>
</template>
