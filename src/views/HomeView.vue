<script>
import InterviewForm from "../components/forms/InterviewForm.vue";
import BillboardBox from "../components/shared/BillboardBox.vue";
import PrimaryButton from "../components/formElements/PrimaryButton.vue";
import TalentResponse from "../components/shared/TalentResponse.vue";

const responses = [
  {
    name: "John Doe",
    date: "06/13/2024 07:15 am",
    interview: "Frontend Developer",
    status: "Pending",
    likes: 3,
    dislikes: 6,
  },
  {
    name: "Marina Anderson",
    date: "06/13/2024 07:15 am",
    interview: "UI\UX Designer",
    status: "Approved",
    likes: 1,
    dislikes: 0,
  },
  {
    name: "Jason Bourne",
    date: "06/13/2024 07:15 am",
    interview: "Project Management Developer",
    status: "Pending",
    likes: 0,
    dislikes: 0,
  },
];

export default {
  name: "HomeView",
  components: { InterviewForm, BillboardBox, PrimaryButton, TalentResponse },
  data() {
    return {
      responses,
    };
  },
};
</script>

<template>
  <section class="px-8 sm:px-4">
    <div class="py-4 border-b border-solid border-gray-200">
      <h1 class="text-3xl inline">Quick start</h1>
      <span class="ml-4 text-gray-400">just add questions and send to candidates</span>
    </div>

    <div class="flex w-full md:flex-col gap-8 py-8">
      <BillboardBox class="flex-1 py-0">
        <InterviewForm title="Interview questionnaire" emailDialog="{{ true }}" />
      </BillboardBox>

      <BillboardBox class="flex-1 pt-0">
        <div class="flex justify-between items-center py-4 mb-4">
          <h2 class="text-lg font-semibold">Last responses</h2>
          <PrimaryButton title="View all responses" class="px-5" link="/all-responses" />
        </div>

        <div class="flex flex-col gap-4">
          <TalentResponse v-for="response in responses" :response="response" />
        </div>
      </BillboardBox>
    </div>
  </section>
</template>

<style scoped></style>
