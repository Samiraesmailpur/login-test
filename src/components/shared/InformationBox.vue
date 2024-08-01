<script>
import Button from '../formElements/Button.vue';
export default {
  name: "InformationBox",
  props: {
    workflow: String,
    interview: String,
  },
  components: { Button }
};
</script>

<template>
  <div class="flex justify-between flex-wrap gap-3 mb-3 sm:hidden">
    <div class="flex items-center gap-3 text-xs">
      <p class="border-r-2 pr-2.5 border-gray-500 font-medium">
        Workflow: <span class="bg-black text-white py-1 px-2 rounded-md font-medium">{{ workflow }}</span>
      </p>
      <p class="font-medium">
        Interview: <span class="bg-black text-white py-1 px-2 rounded-md font-medium">{{ interview }}</span>
      </p>
    </div>
    <div class="flex items-center gap-3 ml-auto text-xs">
      <p class="border-r-2 pr-2.5 border-gray-500 font-medium">
        Total: <span class="bg-black text-white py-1 px-2 rounded-md font-medium">1</span>
      </p>
      <p class="border-r-2 pr-2.5 border-gray-500 font-medium">
        Declined: <span class="bg-black text-white py-1 px-2 rounded-md font-medium">0</span>
      </p>
      <p class="border-r-2 pr-2.5 border-gray-500 font-medium">
        Approved: <span class="bg-aqua text-white py-1 px-2 rounded-md font-medium">0</span>
      </p>
      <Button class="flex items-center gap-1 font-medium" kind="ghost-black">
        <inline_svg src="help" width="20" height="20" class="fill-white"></inline_svg>
        Help
      </Button>
    </div>
  </div>
</template>
