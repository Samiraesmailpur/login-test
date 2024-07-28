<script>
import Button from "../formElements/Button.vue";
import { FwbButton, FwbTooltip } from "flowbite-vue";

export default {
  name: "InterviewCard",
  components: { Button, FwbButton, FwbTooltip },
};
</script>

<template>
  <div class="flex justify-between m-w-64 p-2.5 border rounded-2xl cursor-pointer hover:border-primary hover:border-solid duration-200">
    <RouterLink to="/" class="hover:text-primary duration-200">
      <p class="text-base">Topic 1</p>
      <p class="text-xs text-gray-500 font-semibold">responses: 1</p>
    </RouterLink>
    <div class="grid grid-cols-2 gap-1">
      <fwb-tooltip theme="light" placement="top" class="col-start-2 justify-self-end">
        <template #trigger>
          <Button class="w-8 h-6" kind="ghost-green">
            <inline_svg class="stroke-green-color" src="pencil" width="9" height="9"></inline_svg>
          </Button>
        </template>
        <template #content>Edit</template>
      </fwb-tooltip>
      <fwb-tooltip theme="light" placement="bottom">
        <template #trigger>
          <Button class="w-8 h-6" kind="ghost-aqua">
            <inline_svg class="stroke-green-color" src="link" width="9" height="9"></inline_svg>
          </Button>
        </template>
        <template #content>Copy Link</template>
      </fwb-tooltip>
      <fwb-tooltip theme="light" placement="bottom">
        <template #trigger>
          <Button class="w-8 h-6" kind="ghost-red">
            <inline_svg class="stroke-green-color" src="trash" width="9" height="9"></inline_svg>
          </Button>
        </template>
        <template #content>Delete</template>
      </fwb-tooltip>
    </div>
  </div>
</template>
