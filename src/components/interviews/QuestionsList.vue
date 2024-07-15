<script>
import draggable from "vuedraggable";
import ButtonGhost from "@/components/formElements/ButtonGhost.vue";
import InputComponent from "@/components/formElements/InputComponent.vue";
import PrimaryButton from "@/components/formElements/PrimaryButton.vue";

export default {
  name: "QuestionsList",
  data() {
    return {
      questions: [{ id: 0 }],
    };
  },
  methods: {
    addQuestion() {
      const id = this.questions.length;
      this.questions.push({ id });
    },
    removeQuestion() {
      if (this.questions.length === 1) return;
      this.questions.pop();
    },
  },
  components: { draggable, ButtonGhost, InputComponent, PrimaryButton },
};
</script>

<template>
  <div class="flex justify-between items-center py-4 border-y border-solid border-gray-200">
    <span>Questions:</span>

    <div class="flex gap-2">
      <PrimaryButton class="px-6 py-2">
        <inline_svg src="magic-wand" width="24" height="24"></inline_svg>
      </PrimaryButton>

      <ButtonGhost @click="addQuestion" class="px-6 py-2">
        <inline_svg src="plus-circled" width="24" height="24"></inline_svg>
      </ButtonGhost>
    </div>
  </div>

  <draggable v-model="questions" class="flex flex-col gap-6 w-full" itemKey="id">
    <template #item="{ index }">
      <InputComponent type="text" name="questions[]">
        <template #prepend>
          <div class="flex items-center justify-center pr-2 cursor-pointer">
            <inline_svg src="arrows-vertical" width="16" height="16" class="fill-gray-400 hover:fill-primary"></inline_svg>
          </div>
        </template>

        <template #append>
          <div class="flex gap-3">
            <ButtonGhost class="appended px-6 w-auto">
              <inline_svg src="gears" width="24" height="24"></inline_svg>
            </ButtonGhost>

            <ButtonGhost v-if="index != 0" @click="removeQuestion" class="red px-6 w-auto">
              <inline_svg src="plus-circled" width="24" height="24" class="rotate-45"></inline_svg>
            </ButtonGhost>
          </div>
        </template>
      </InputComponent>
    </template>
  </draggable>
</template>
