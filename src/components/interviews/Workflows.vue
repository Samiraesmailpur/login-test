<script>
import ButtonGhost from "../formElements/ButtonGhost.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";
import InputComponent from "../formElements/InputComponent.vue";

export default {
  name: "Workflows",
  components: { ButtonGhost, PrimaryButton, InputComponent },
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="border-b border-solid border-gray-200 flex justify-between pb-2.5">
      <div>
        <div class="flex items-center gap-1.5">
          <inline_svg src="filter" width="17" height="17"></inline_svg>
          <h2 class="text-lg font-semibold">Talent Acquisition</h2>
        </div>
        <span class="text-xs text-gray-500 font-semibold">Workflows</span>
      </div>
      <PrimaryButton class="px-6 py-2">
        <inline_svg src="plus-circled" width="24" height="24"></inline_svg>
      </PrimaryButton>
    </div>
      <InputComponent>
        <template #append>
          <div class="flex">
            <ButtonGhost class="appended px-6 w-auto rounded-none	green">
              <inline_svg src="pencil" width="24" height="24"></inline_svg>
            </ButtonGhost>
            <ButtonGhost class="appended px-6 w-auto aqua">
              <inline_svg src="share" width="24" height="24"></inline_svg>
            </ButtonGhost>
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
