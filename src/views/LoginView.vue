<script setup>
import PrimaryButton from "../components/formElements/PrimaryButton.vue";
import SignInForm from "../components/forms/SignInForm.vue";
</script>

<template>
  <main>
    <section class="flex sm:flex-col w-full h-full h-screen items-end">
      <aside
        class="flex w-2/5 flex-col flex-1 justify-between w-50 pt-16 px-8 pb-64 h-full sm:px-6 sm:w-full sm:pb-20"
      >
        <div>
          <h1 class="text-5xl mb-6 text-white sm:text-3xl">
            Welcome to the new hiring journey
          </h1>

          <h3 class="text-xl text-white sm:text-xl">
            Please use your credentials to log in
          </h3>
        </div>

        <div>
          <h3 class="text-xl mb-8 text-white sm:text-xl">
            If you are not a member, please
          </h3>

          <PrimaryButton title="sign up" link="/signup" />
        </div>
      </aside>

      <div
        class="w-3/5 p-20 pb-64 sm:px-14 sm:mx-auto sm:max-w-lg sm:w-full sm:px-6 sm:pb-20"
      >
        <h1 class="text-3xl mb-12 font-semibold">Sign In</h1>
        <SignInForm />
      </div>
    </section>
  </main>
</template>

<style scoped>
aside {
  background: var(--primary-gradient);
}
</style>
