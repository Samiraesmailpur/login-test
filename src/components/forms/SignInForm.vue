<script setup>
import { RouterLink } from 'vue-router';
import SubmitButton from '../formElements/SubmitButton.vue';
import ButtonGhost from '../formElements/ButtonGhost.vue';
import InputComponent from '../formElements/InputComponent.vue';

defineProps({
  title: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <form action="/signin">
    <div class="flex flex-col">
      <InputComponent type="text" name="signin[email]" label="Email" />
      <InputComponent type="password" name="signin[password]" label="Password" />
    </div>

    <div class="flex justify-between">
      <ButtonGhost title="Forgot Password?" link="/forgot-password" />
      <SubmitButton title="Sign In" />
    </div>
  </form>
</template>

<style scoped>

</style>
