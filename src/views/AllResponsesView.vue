<script>
import TalentResponse from "@/components/shared/TalentResponse.vue";
import BillboardBox from "@/components/shared/BillboardBox.vue";
import SearchInput from '@/components/formElements/SearchInput.vue'
import SelectComponent from '@/components/formElements/SelectComponent.vue'
import { resizeMixin } from "@/mixins/resize";

const responses = [
  {
    name: "John Doe",
    date: "06/13/2024 07:15 am",
    interview: "Frontend Developer",
    status: "inbox",
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
  {
    name: "Jason Bourne",
    date: "06/13/2024 07:15 am",
    interview: "Project Management Developer",
    status: "feedback preparation",
    likes: 0,
    dislikes: 0,
  },
  {
    name: "Jason Bourne",
    date: "06/13/2024 07:15 am",
    interview: "Project Management Developer",
    status: "processed",
    likes: 0,
    dislikes: 0,
  },
];


export default {
  name: "AllResponsesView",
  mixins: [ resizeMixin ],
  components: { TalentResponse, BillboardBox, SearchInput, SelectComponent },
  data() {
    return {
      responses,
      isOpen: false,
      height: 0
    };
  },
  methods: {
    getEntireMenuHeight() {
      this.$refs.filter.style.display = "block"
      const height = this.$refs.filter.offsetHeight
      this.height = height
    },
    handleToggleFilter() {
      this.getEntireMenuHeight()
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    cssVars() {
      return {
        '--height': this.height + 'px',
      }
    }
  }
};
</script>


<template>
  <section class="px-8 sm:px-4">
    <div class="py-4 flex items-end md:items-start md:flex-col">
      <h1 class="text-3xl inline">All responses</h1>
      <div>
        <span class="px-4	border-r-2 border-gray-300 md:pl-0">Quick start</span>
        <span class="ml-4 text-gray-300">All responses</span>
      </div>
    </div>
    <div class="py-4 mb-4 border-y border-solid border-gray-200">
      <div class="sm:block sm:flex sm:items-center sm:gap-1 hidden hover:text-primary box mb-2" @click="handleToggleFilter">
        <span>Filters and sorting</span>
        <inline_svg class="box-hover:fill-primary" src="arrow-stroke" width="12" height="12"></inline_svg>
      </div>
      <transition name="slide-fade" :style="cssVars">
        <div class="flex items-center justify-between sm:flex-col sm:items-start" v-show="isOpen" ref="filter" >
          <div class="flex items-center gap-1.5 sm:flex-wrap">
            <SelectComponent />
            <SearchInput />
          </div>
          <p class="text-gray-500">
            Showing 1-1 of 1 item.
          </p>
        </div>
      </transition>
    </div>
    <BillboardBox>
      <div class="flex flex-col gap-4">
        <TalentResponse v-for="response in responses" :response="response" />
      </div>
    </BillboardBox>
  </section>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  height: 0;
  overflow: hidden;

}

.slide-fade-enter-to,
.slide-fade-leave-from {
  height: var(--height);
  overflow: hidden;
}
</style>
