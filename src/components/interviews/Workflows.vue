<script>
import Button from "../formElements/Button.vue";
import InputComponent from "../formElements/InputComponent.vue";

export default {
  name: "Workflows",
  props: { title: String, required: true },
  components: { Button, InputComponent },
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="border-b border-solid border-gray-200 flex justify-between items-baseline pb-2.5">
      <div>
        <div class="flex items-center gap-1.5">
          <inline_svg src="filter" width="17" height="17"></inline_svg>
          <h2 class="text-lg font-semibold">{{ title }}</h2>
        </div>
        <span class="text-xs text-gray-500 font-semibold">Workflows</span>
      </div>

      <Button class="px-6 py-2" kind="primary">
        <inline_svg src="plus-circled" width="24" height="24"></inline_svg>
      </Button>
    </div>

    <InputComponent>
      <template #append>
        <div class="flex">
          <Button class="appended px-6 w-auto rounded-none" kind="ghost-green">
            <inline_svg src="pencil" width="24" height="24"></inline_svg>
          </Button>

          <Button class="appended px-6 w-auto" kind="ghost-aqua">
            <inline_svg src="share" width="24" height="24"></inline_svg>
          </Button>
        </div>
      </template>
    </InputComponent>

    <div>
      <div class="flex items-center gap-1.5">
        <inline_svg src="paint-palette" width="20" height="20"></inline_svg>
        <p>Branding & Customization:<span class="font-semibold"> My Config #1</span></p>
      </div>
    </div>
  </div>
</template>
