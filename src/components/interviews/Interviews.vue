<script>
import ButtonGhost from "../formElements/ButtonGhost.vue";
import InterviewCard from "../shared/InterviewCard.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";
import AddInterviewDialog from "@/components/dialogs/AddInterviewDialog.vue";

export default {
  name: "Interviews",
  components: { ButtonGhost, InterviewCard, PrimaryButton, AddInterviewDialog },
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="border-b border-solid border-gray-200 flex justify-between pb-2.5">
      <div>
        <h2 class="text-lg font-semibold">Interviews</h2>
        <span class="text-xs text-gray-500 font-semibold">Quick start</span>
      </div>
      <PrimaryButton class="px-6 py-2" id="open-dialog">
        <inline_svg src="plus-circled" width="24" height="24"></inline_svg>
      </PrimaryButton>
      <AddInterviewDialog triggerId="open-dialog" />
    </div>
    <InterviewCard />
    <InterviewCard />
    <InterviewCard />
    <InterviewCard />
  </div>
</template>
