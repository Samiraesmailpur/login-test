<script>
import Button from "../formElements/Button.vue";
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
    Button,
    InputComponent,
    TextAreaComponent,
    LabeledDivider,
    AddEmailsDialog,
    QuestionsList,
  },
};
</script>

<template>
  <div class="px-4 py-3">
    <form action="/interviews" method="post" id="addInterviewForm" class="flex flex-col gap-6">
      <InputComponent name="topic" label="Interview's topic" auto-focus />

      <QuestionsList />

      <LabeledDivider label="Link to the interview" />

      <InputComponent name="iterview_url" label="Interview link">
        <template #append>
          <Button class="appended px-6 py-0" kind="ghost-red" title="Save and get URL" />
        </template>
      </InputComponent>

      <LabeledDivider label="Send an email" />

      <div v-if="emailDialog" class="pb-6">
        <div class="flex gap-2 items-center mb-6 sm:flex-col text-xs">
          <div class="flex gap-2">
            <span>Will be sent to</span>
            <span ref="candidatesAmountRef"
                  class="px-1.5 rounded"
                  :class="{ 'bg-lime-600': candidates.length > 0, 'bg-gray-300': candidates.length <= 0 }">
              {{ candidates.length }}
            </span>
            <span>candidates.</span>

          </div>

          <span>Email language:</span>
          <Button title="English" class="py-1 px-2" />
        </div>

        <div class="flex w-full justify-between sm:flex-col sm:gap-4">
          <Button title="Add candidate's email addresses" id="openEmailsDialog"
                       class="py-3 px-4" />
          <Button title="Send by Email"
                       class="py-2 px-4" />
        </div>

        <AddEmailsDialog @add-candidates="candidates = $event" candidatesRef="candidatesAmountRef" triggerId="openEmailsDialog" />
      </div>

      <div v-else class="flex justify-between gap-4">
        <TextAreaComponent name="interview_date" rows="3" label="Racipients emails. One in a row" class="w-full text-xs max-w-prose" />

        <div class="flex flex-col gap-4">
          <span class="whitespace-nowrap">Email language: EN</span>

          <Button title="Send Email" class="w-full" />
        </div>
      </div>
    </form>
  </div>
</template>
