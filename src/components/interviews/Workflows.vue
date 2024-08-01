<script>
import Button from "../formElements/Button.vue";
import SelectInputComponent from "../formElements/SelectInputComponent.vue";
import EditWorkflow from "@/components/dialogs/EditWorkflow.vue";

export default {
  name: "Workflows",
  props: {
    title: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isShowModal: false,
      workflowsOptions: [
        { label: "Newest first", value: "new" },
        { label: "Oldest first", value: "old" }
      ],
      selectedOption: "new",
    };
  },
  components: {
    Button,
    SelectInputComponent,
    EditWorkflow,
  },
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="border-b border-solid border-gray-200 flex justify-between items-start pb-2.5">
      <div>
        <div class="flex items-center gap-1.5">
          <inline_svg src="filter" width="17" height="17"></inline_svg>
          <h2 class="text-lg font-medium">{{ title }}</h2>
        </div>
        <span class="text-xs text-gray-500">Workflows</span>
      </div>

      <Button class="px-6 py-2" kind="primary">
        <inline_svg src="plus-circled" width="18" height="18"></inline_svg>
      </Button>
    </div>

    <SelectInputComponent placeHolder="Order by:" :data="workflowsOptions" :selected="selectedOption" inputName="sort_by">
      <template #append>
        <div class="flex">
          <Button class="appended px-6 w-auto rounded-none" @click="isShowModal = true" kind="ghost-green">
            <inline_svg src="pencil" width="14" height="14"></inline_svg>
          </Button>
          <EditWorkflow v-if="isShowModal" @hide-dialog="isShowModal = false"/>

          <Button class="appended px-6 w-auto" kind="ghost-aqua">
            <inline_svg src="share" width="14" height="14"></inline_svg>
          </Button>
        </div>
      </template>
    </SelectInputComponent>

    <div>
      <div class="flex items-center gap-1.5 text-xs">
        <inline_svg src="paint-palette" width="12" height="12"></inline_svg>
        <p>Branding & Customization:<span class="font-medium"> My Config #1</span></p>
      </div>
    </div>
  </div>
</template>
