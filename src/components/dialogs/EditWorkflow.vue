<script>
import Button from "../formElements/Button.vue";
import InputComponent from "../formElements/InputComponent.vue";
import SelectInputComponent from "../formElements/SelectInputComponent.vue";

export default {
  name: "EditWorkflow",
  data() {
    return {
      textAreaValue: "",
      steps: [
        { label: "Step 1", value: "step1" },
        { label: "Step 2", value: "step2" },
        { label: "Step 3", value: "step3" },
      ],
      configs: [
        { label: "Config 1", value: "config1" },
        { label: "Config 2", value: "config2" },
        { label: "Config 3", value: "config3" },
      ],
    };
  },
  mounted() {
    this.$refs.workflowDialogRef.showModal();
  },
  methods: {
    closeDialog() {
      this.$emit("hide-dialog");
    },
  },
  components: { Button, InputComponent, SelectInputComponent },
};
</script>

<template>
  <dialog ref="workflowDialogRef"
          class="absolute top-1/2 left-1/2 divide-y -translate-y-1/2 -translate-x-1/2 rounded-sm w-full max-w-xl sm:h-screen">
    <div class="p-8">
      <h1 class="text-xl">Edit Workflow</h1>
      <p>Talent Acquisition</p>
    </div>
    <div class="p-8 flex flex-col gap-6">
      <InputComponent name="label" label="Label" auto-focus/>

      <div>
        <span>Workflows steps:</span>
        <SelectInputComponent  placeHolder="Default" :data="steps" selected="step1" inputName="steps"/>
      </div>

      <div>
        <span>Branding & Customization config:</span>
        <SelectInputComponent  placeHolder="My Config #1" :data="configs" selected="config1" inputName="configs"/>
      </div>
    </div>
      <div class="flex justify-end gap-4 p-4 border-t border-solid border-gray-200">
      <Button @click="closeDialog" title="Cancel" class="w-32"/>
      <Button title="Save" class="w-32" kind="primary"/>
    </div>
  </dialog>
</template>
