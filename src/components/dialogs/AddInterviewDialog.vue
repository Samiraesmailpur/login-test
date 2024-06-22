<script setup>
import { ref, onMounted } from "vue";
import ButtonGhost from "../formElements/ButtonGhost.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";
import InputComponent from "../formElements/InputComponent.vue";
import LabeledDivider from "../shared/LabeledDivider.vue";
import QuestionsList from "./interviewDialog/QuestionsList.vue";
import TextAreaComponent from "../formElements/TextAreaComponent.vue";

const props = defineProps({
  triggerId: {
    type: String,
    required: true,
  }
});

const dialogRef = ref(null);

onMounted(() => {
  const triggerElement = document.getElementById(props.triggerId);
  if (triggerElement) {
    triggerElement.addEventListener('click', openDialog);
  }
});

const openDialog = () => {
  dialogRef.value.showModal();
};

</script>

<template>
  <dialog ref="dialogRef"
          id="addInterviewDialog"
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-sm w-full max-w-3xl sm:h-screen">
    <div class="flex justify-between items-center p-4">
      <h2 class="text-lg font-semibold">Add Interview</h2>

      <div class="flex">
        <PrimaryButton title="Settings" class="px-5" />
        <button @click="dialogRef.close()" class="px-4">
          <inline_svg src="cross" width="12" height="12"></inline_svg>
        </button>
      </div>
    </div>

    <div class="px-4 py-3">
      <form action="/interviews" method="post" id="addInterviewForm"
            class="flex flex-col gap-8">
        <InputComponent name="topic" label="Interview's topic" auto-focus />

        <QuestionsList />

        <LabeledDivider label="Interview URL" />

        <InputComponent name="iterview_url" label="Interview link" >
          <template #append>
            <ButtonGhost class="appended red px-6" title="Save and get URL" />
          </template>
        </InputComponent>

        <LabeledDivider label="Send an email" />

        <div class="flex justify-between gap-4">
          <TextAreaComponent name="interview_date" label="Racipients emails. One in a row" class="w-full max-w-prose" />

          <div class="flex flex-col gap-4">
            <span class="whitespace-nowrap">Email language: EN</span>

            <ButtonGhost title="Send Email" class="w-full"/>
          </div>
        </div>
      </form>
    </div>

    <div class="flex justify-end gap-4 p-4">
      <ButtonGhost title="Cancel" class="w-32" />
      <PrimaryButton title="Save" class="w-32"/>
    </div>
  </dialog>
</template>

<style scoped>

</style>
