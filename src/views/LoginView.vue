<script>
import PrimaryButton from "../components/formElements/PrimaryButton.vue";
import SignInForm from "../components/forms/SignInForm.vue";
import AddInterviewDialog from "../components/dialogs/AddInterviewDialog.vue";

export default {
  name: "LoginView",
  components: { PrimaryButton, SignInForm, AddInterviewDialog },
}
</script>

<template>
  <section class="flex sm:flex-col w-full h-full h-screen items-end">
    <aside
      class="flex w-2/5 flex-col flex-1 justify-between w-50 pt-16 px-10 pb-72 h-full sm:px-6 sm:w-full sm:pb-20"
    >
      <div>
        <h1 class="text-6xl mb-6 text-white md:text-4xl">
          Welcome to the new hiring journey
        </h1>

        <h3 class="text-xl text-white md:text-xl">
          Please use your credentials to log in
        </h3>
      </div>

      <div>
        <h3 class="text-xl mb-8 text-white sm:text-xl">
          If you are not a member, please
        </h3>

        <PrimaryButton title="sign up" class="red" link="#" id="open-dialog" />
      </div>

      <AddInterviewDialog triggerId="open-dialog" />
    </aside>

    <div
      class="w-3/5 p-20 pb-72 mx-auto sm:max-w-lg sm:w-full sm:px-6 sm:pb-20"
    >
      <div class="w-6/12 mx-auto md:w-full sm:w-full flex items-center justify-center flex-col">
        <h1 class="text-3xl mb-12 font-semibold self-start">Sign In</h1>
        <SignInForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
aside {
  background: var(--primary-gradient);
}
</style>
