<script>
import TalentCard from "@/components/interviews/TalentCard.vue";
import Interviews from "@/components/interviews/Interviews.vue";
import Workflows from "@/components/interviews/Workflows.vue";
import BillboardBox from "@/components/shared/BillboardBox.vue";
import InformationBox from "@/components/shared/InformationBox.vue";
import StatusBox from "@/components/shared/StatusBox.vue";

export default {
  name: "HumanResourcesView",
  components: { TalentCard, Interviews, BillboardBox, Workflows, InformationBox, StatusBox },
  data() {
    return {
      statuses: ['Pending', 'Approved', 'Inbox']
    };
  }
};
</script>

<template>
  <section class="px-8 sm:px-4">
    <div class="flex py-4 gap-8 md:flex-col">
      <div class="basis-1/4">
        <BillboardBox class="mb-5">
          <Workflows title="Employee Assessment"/>
        </BillboardBox>
        <BillboardBox>
          <Interviews subtitle="Corporate Mastery" />
        </BillboardBox>
      </div>
      <div class="flex-1">
        <InformationBox  workflow="Corporate Mastery" interview="Onboarding Assessment" />
        <StatusBox :statuses="statuses" />
      </div>
    </div>
  </section>
</template>
