<script>
import ButtonGhost from "../formElements/ButtonGhost.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";
import InputComponent from "../formElements/InputComponent.vue";
import TextAreaComponent from "../formElements/TextAreaComponent.vue";

import LabeledDivider from "../shared/LabeledDivider.vue";

import AddEmailsDialog from "../dialogs/AddEmailsDialog.vue";

import QuestionsList from "../interviews/QuestionsList.vue";

export default {
  name: "InterviewForm",
  data() {
    return {
      candidates: [],
    };
  },
  props: {
    title: String,
    dialog: {
      default: false,
    },
    emailDialog: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ButtonGhost,
    PrimaryButton,
    InputComponent,
    TextAreaComponent,
    LabeledDivider,
    AddEmailsDialog,
    QuestionsList,
  },
};
</script>

<template>
  <div class="flex justify-between items-center p-4 mb-4 border-b border-solid border-gray-200">
    <h2 class="text-lg font-semibold">{{ title }}</h2>

    <div class="flex">
      <PrimaryButton title="Settings" class="px-5" />
      <button v-if="dialog" @click="$props.dialog.close()" class="px-4">
        <inline_svg src="cross" width="12" height="12"></inline_svg>
      </button>
    </div>
  </div>

  <div class="px-4 py-3">
    <form action="/interviews" method="post" id="addInterviewForm" class="flex flex-col gap-6">
      <InputComponent name="topic" label="Interview's topic" auto-focus />

      <QuestionsList />

      <LabeledDivider label="Link to the interview" />

      <InputComponent name="iterview_url" label="Interview link">
        <template #append>
          <ButtonGhost class="appended red px-6" title="Save and get URL" />
        </template>
      </InputComponent>

      <LabeledDivider label="Send an email" />

      <div v-if="emailDialog" class="pb-6">
        <div class="flex gap-2 items-center mb-6 sm:flex-col">
          <div class="flex gap-2 text-sm">
            <span>Will be sent to</span>
            <span ref="candidatesAmountRef"
                  class="px-1.5 rounded"
                  :class="{ 'bg-lime-600': candidates.length > 0, 'bg-gray-400': candidates.length <= 0 }">
              {{ candidates.length }}
            </span>
            <span>candidates.</span>

          </div>

          <span>Email language:</span>
          <ButtonGhost title="English" id="openEmailsDialog"
                        class="text-xs py-1 px-2" />
        </div>

        <div class="flex w-full justify-between sm:flex-col sm:gap-4">
          <ButtonGhost title="Add candidate's email addresses" id="openEmailsDialog"
                       class="text-sm py-2 px-4" />
          <ButtonGhost title="Send by Email"
                       class="text-sm py-2 px-4" />
        </div>

        <AddEmailsDialog @add-candidates="candidates = $event" candidatesRef="candidatesAmountRef" triggerId="openEmailsDialog" />
      </div>

      <div v-else class="flex justify-between gap-4">
        <TextAreaComponent name="interview_date" label="Racipients emails. One in a row" class="w-full max-w-prose" />

        <div class="flex flex-col gap-4">
          <span class="whitespace-nowrap">Email language: EN</span>

          <ButtonGhost title="Send Email" class="w-full" />
        </div>
      </div>
    </form>
  </div>
</template>
