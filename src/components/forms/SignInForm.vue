<script>
import InputComponent from "../formElements/InputComponent.vue";
import PrimaryButton from "../formElements/PrimaryButton.vue";

export default {
  name: "SignInForm",
  components: { InputComponent, PrimaryButton },
}
</script>

<template>
  <form action="/signin" class="w-full">
    <div class="flex flex-col gap-8">
      <InputComponent type="text" name="signin[email]" label="Email" />
      <InputComponent type="password" name="signin[password]" label="Password"/>

      <div class="flex justify-between items-center sm:flex-col-reverse sm:gap-4">
        <RouterLink to="/reset_password">Forget Password?</RouterLink>
        <PrimaryButton class="px-8" title="Sign In" href="#a" />
      </div>
    </div>
  </form>
</template>
