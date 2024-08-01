<script>
import InterviewForm from "../components/forms/InterviewForm.vue";
import BillboardBox from "../components/shared/BillboardBox.vue";
import Button from "../components/formElements/Button.vue";
import TalentResponse from "../components/shared/TalentResponse.vue";

const responses = [
  {
    name: "John Doe",
    date: "06/13/2024 07:15 am",
    interview: "Frontend Developer",
    status: "pending",
    likes: 3,
    dislikes: 6,
  },
  {
    name: "Marina Anderson",
    date: "06/13/2024 07:15 am",
    interview: "UI\UX Designer",
    status: "approved",
    likes: 1,
    dislikes: 0,
  },
  {
    name: "Jason Bourne",
    date: "06/13/2024 07:15 am",
    interview: "Project Management Developer",
    status: "pending",
    likes: 0,
    dislikes: 0,
  },
];

export default {
  name: "HomeView",
  components: { InterviewForm, BillboardBox, TalentResponse, Button },
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
      <h1 class="text-3xl inline font-light">Quick start</h1>
      <span class="ml-4 text-gray-500">just add questions and send to candidates</span>
    </div>

    <div class="flex w-full md:flex-col gap-8 py-8">
      <BillboardBox class="flex-1 py-0">
        <div class="flex justify-between items-center pt-4 mb-4">
          <h2 class="text-lg font-medium">Interview questionnaire</h2>

          <Button title="Settings" class="px-5 py-3" kind="primary" />
        </div>

        <InterviewForm emailDialog="{{ true }}" />
      </BillboardBox>

      <BillboardBox class="flex-1 pt-0">
        <div class="flex justify-between items-center pt-4 mb-4">

          <h2 class="text-lg font-medium">Last responses</h2>
          <Button title="View all responses" class="px-5" link="/all-responses" kind="primary" />
        </div>

        <div class="flex flex-col gap-4 py-3">
          <TalentResponse v-for="response in responses" :response="response" />
        </div>
      </BillboardBox>
    </div>
  </section>
</template>

<style scoped></style>
