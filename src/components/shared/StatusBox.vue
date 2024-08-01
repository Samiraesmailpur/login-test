<template>
  <div class="row">
    <template v-for="status in Object.keys(responses)" :key="status">
      <div class="col-3" v-show="isOpenStatus === status || isOpenStatus === 'All'">
        <StatusBadge :status="status" @click="changeOpenStatus(status)" />

        <draggable class="dragArea list-group flex gap-2 mb-3" :list="responses[status]" :group="{ name: 'people' }">
          <template #item="{ element }">
            <div class="list-group-item">
              <TalentCard :item="element" />
            </div>
          </template>
        </draggable>

        <div v-if="!responses[status].length" class="flex items-center gap-2 mb-8">
          <inline_svg src="id" width="30" height="30" class="fill-gray-300"></inline_svg>
          There are no candidates' responses in this status
        </div>
      </div>
    </template>
  </div>
</template>

<!-- TEMPORARY PLACEMENT, AS BACKEND ISNT READY, THE PAYLOAD IS HARDCODED -->
<script>
import draggable from "vuedraggable";
import TalentCard from '../interviews/TalentCard.vue';
import StatusBadge from '../shared/StatusBadge.vue'

const responses = {
  pending: [
    {
      id: 1,
      name: "John Doe",
      date: "06/13/2024 07:15 am",
      interview: "Frontend Developer",
      status: "pending",
      likes: 3,
      dislikes: 6,
    },
    {
      id: 3,
      name: "Jason Bourne",
      date: "06/13/2024 07:15 am",
      interview: "Project Management Developer",
      status: "pending",
      likes: 0,
      dislikes: 0,
    },
  ],
  approved: [
    {
      id: 2,
      name: "Marina Anderson",
      date: "06/13/2024 07:15 am",
      interview: "UI/UX Designer",
      status: "approved",
      likes: 1,
      dislikes: 0,
    },
    {
      id: 2,
      name: "Marina Anderson",
      date: "06/13/2024 07:15 am",
      interview: "UI/UX Designer",
      status: "approved",
      likes: 1,
      dislikes: 0,
    },
  ],
  inbox: [
    {
      id: 4,
      name: "Hellen King",
      date: "06/13/2024 07:15 am",
      interview: "Project Management Developer",
      status: "inbox",
      likes: 0,
      dislikes: 0,
    },
  ]
};

export default {
  name: "StatusBox",
  props: {
    statuses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      responses,
      isOpenStatus: 'All'
    };
  },
  methods: {
    changeOpenStatus(status) {
      this.isOpenStatus = status === this.isOpenStatus ? 'All' : status;
    },
  },
  components: { draggable, TalentCard, StatusBadge },
};
</script>
