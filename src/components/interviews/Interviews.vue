<script>
import Button from "../formElements/Button.vue";
import InterviewCard from "../shared/InterviewCard.vue";
import AddInterviewDialog from "@/components/dialogs/AddInterviewDialog.vue";

export default {
  name: "Interviews",
  props: { subtitle: String, required: true },
  components: { Button, InterviewCard, AddInterviewDialog },
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="border-b border-solid border-gray-200 flex justify-between items-start pb-2.5">
      <div>
        <h2 class="text-lg font-medium">Interviews</h2>
        <span class="text-xs text-gray-500">{{ subtitle }}</span>
      </div>
      <Button class="px-6 py-2" id="open-dialog" kind="primary">
        <inline_svg src="plus-circled" width="18" height="18"></inline_svg>
      </Button>
      <AddInterviewDialog triggerId="open-dialog" />
    </div>

    <InterviewCard />
    <InterviewCard />
    <InterviewCard />
    <InterviewCard />
  </div>
</template>
