<script>
import TalentCard from "@/components/interviews/TalentCard.vue";
import Interviews from "@/components/interviews/Interviews.vue";
import Workflows from "@/components/interviews/Workflows.vue";
import BillboardBox from "@/components/shared/BillboardBox.vue";

export default {
  name: "TalentAcquisition",
  components: { TalentCard, Interviews, BillboardBox, Workflows },
};
</script>

<template>
  <section class="px-8 sm:px-4">
    <div class="flex py-4 gap-8 md:flex-col">
      <div>
        <BillboardBox class="mb-5">
          <Workflows />
        </BillboardBox>
        <BillboardBox>
          <Interviews />
        </BillboardBox>
      </div>
      <TalentCard />
    </div>
  </section>
</template>
