<script>
import Button from "../formElements/Button.vue";
import { FwbButton, FwbTooltip } from "flowbite-vue";

export default {
  name: "InterviewCard",
  data() {
    return {
      actions: [
        { icon: "pencil", label: "Edit", btnKind: "ghost-green", class: "col-start-2 justify-self-end", toolTipPlacement: "top" },
        { icon: "link", label: "Copy Link", btnKind: "ghost-aqua", class: "", toolTipPlacement: "bottom" },
        { icon: "trash", label: "Delete", btnKind: "ghost-red", class: "", toolTipPlacement: "bottom" },
      ],
    };
  },
  components: { Button, FwbButton, FwbTooltip },
};
</script>

<template>
  <div class="flex justify-between m-w-64 p-2.5 border rounded-2xl cursor-pointer hover:border-primary hover:border-solid duration-200">
    <RouterLink to="/" class="hover:text-primary duration-200">
      <p class="text-base">Topic 1</p>
      <p class="text-xs text-gray-500">responses: 1</p>
    </RouterLink>
    <div class="grid grid-cols-2 gap-1">
      <fwb-tooltip v-for="action in actions" theme="light" :placement="action.toolTipPlacement" :class="action.class">
        <template #trigger>
          <Button class="w-8 h-6 py-0 px-0" :kind="action.btnKind">
            <inline_svg class="stroke-green-color" :src="action.icon" width="12" height="12"></inline_svg>
          </Button>
        </template>
        <template #content>{{ action.label }}</template>
      </fwb-tooltip>
    </div>
  </div>
</template>
