<script setup>
import SubmitButton from "../formElements/SubmitButton.vue";
import ButtonGhost from "../formElements/ButtonGhost.vue";
import InputComponent from "../formElements/InputComponent.vue";
import { RouterLink } from "vue-router";

defineProps({
  title: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <form action="/signin" class="w-full">
    <div class="flex flex-col gap-8">
      <InputComponent type="text" name="signin[email]" label="Email" />
      <InputComponent
        type="password"
        name="signin[password]"
        label="Password"
      />

      <div
        class="flex justify-between items-center sm:flex-col-reverse sm:gap-4"
      >
        <RouterLink to="/reset_password">Forget Password?</RouterLink>
        <SubmitButton title="Sign In" />
      </div>
    </div>
  </form>
</template>

<style scoped></style>
