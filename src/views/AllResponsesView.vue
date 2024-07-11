<script>
import TalentResponse from "@/components/shared/TalentResponse.vue";
import BillboardBox from "@/components/shared/BillboardBox.vue";
import SearchInput from '@/components/formElements/SearchInput.vue'
import SelectComponent from '@/components/formElements/SelectComponent.vue'

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
  name: "AllResponsesView",
  components: { TalentResponse, BillboardBox, SearchInput, SelectComponent },
  data() {
    return {
      responses,
    };
  },
};
</script>


<template>
  <section class="px-8 sm:px-4">
    <div class="py-4">
      <h1 class="text-3xl inline">All responses</h1>
      <span class="px-4	border-r-2 border-gray-400">Quick start</span>
      <span class="ml-4 text-gray-400">All responses</span>
    </div>
    <div class="flex items-center justify-between py-4 mb-4 border-y border-solid border-gray-200">
      <div class="flex items-center justify-between gap-1.5">
        <SelectComponent />
        <SearchInput />
      </div>
      <p class="text-gray-500">Showing 1-1 of 1 item.</p>
    </div>
    <BillboardBox>
      <div class="flex flex-col gap-4">
        <TalentResponse v-for="response in responses" :response="response" />
      </div>
    </BillboardBox>
  </section>
</template>
