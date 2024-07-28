<script>
import InputComponent from "../formElements/InputComponent.vue";
import Button from "../formElements/Button.vue";

export default {
  name: "SignInForm",
  components: { InputComponent, Button },
}
</script>

<template>
  <form action="/signin" class="w-full">
    <div class="flex flex-col gap-8">
      <InputComponent type="text" name="signin[email]" label="Email" />
      <InputComponent type="password" name="signin[password]" label="Password"/>

      <div class="flex justify-between items-center sm:flex-col-reverse sm:gap-4">
        <RouterLink to="/reset_password">Forget Password?</RouterLink>
        <Button class="px-8" title="Sign In" href="#a" kind="primary"/>
      </div>
    </div>
  </form>
</template>
