<script>
import ButtonGhost from "../formElements/ButtonGhost.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";
import InputComponent from "../formElements/InputComponent.vue";
import TextAreaComponent from "../formElements/TextAreaComponent.vue";

// import { ButtonGhost, PrimaryButton, InputComponent, TextAreaComponent } from "../formElements";
import LabeledDivider from "../shared/LabeledDivider.vue";

import AddEmailsDialog from "../dialogs/AddEmailsDialog.vue";

import QuestionsList from "../interviews/QuestionsList.vue"

export default {
  name: "InterviewForm",
  props: {
    title: String,
    dialog: {
      type: Boolean,
      default: false,
    },
    emailDialog: {
      type: Boolean,
      default: false,
    },
  },
  components: { ButtonGhost, PrimaryButton, InputComponent, TextAreaComponent, LabeledDivider, AddEmailsDialog, QuestionsList },
}
</script>

<template>
  <div class="flex justify-between items-center p-4 mb-4 border-b border-solid border-gray-200">
    <h2 class="text-lg font-semibold">{{ title }}</h2>

    <div class="flex">
      <PrimaryButton title="Settings" class="px-5" />
      <button v-if="dialog" @click="dialogRef.close()" class="px-4">
        <inline_svg src="cross" width="12" height="12"></inline_svg>
      </button>
    </div>
  </div>

  <div class="px-4 py-3">
    <form action="/interviews" method="post" id="addInterviewForm"
          class="flex flex-col gap-8 pb-12">
      <InputComponent name="topic" label="Interview's topic" auto-focus />

      <QuestionsList />

      <LabeledDivider label="Link to the interview" />

      <InputComponent name="iterview_url" label="Interview link" >
        <template #append>
          <ButtonGhost class="appended red px-6" title="Save and get URL" />
        </template>
      </InputComponent>

      <LabeledDivider label="Send an email" />

      <div v-if="emailDialog" class="">
        <div class="flex gap-4">
          <span>Will be sent to</span>
          <span ref="candidatesAmountRef"></span>
          <span>candidates</span>
        </div>

        <div class="flex w-full justify-between">
          <ButtonGhost title="Add candidate's email addresses" id="openEmailsDialog"/>
          <ButtonGhost title="Send by Email"/>
        </div>

        <AddEmailsDialog candidatesRef="candidatesAmountRef" triggerId="openEmailsDialog" />
      </div>

      <div v-else class="flex justify-between gap-4">
        <TextAreaComponent name="interview_date" label="Racipients emails. One in a row" class="w-full max-w-prose" />

        <div class="flex flex-col gap-4">
          <span class="whitespace-nowrap">Email language: EN</span>

          <ButtonGhost title="Send Email" class="w-full"/>
        </div>
      </div>
    </form>
  </div>
</template>
