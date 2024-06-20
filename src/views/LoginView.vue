<script setup>
import { RouterLink, RouterView } from "vue-router";
import PrimaryButton from "../components/formElements/PrimaryButton.vue";
import SignInForm from "../components/forms/SignInForm.vue";
</script>

<template>
  <main>
    <section class="flex xs-flex-col w-full h-full">
      <aside class="flex flex-col flex-1 justify-between w-50 pt-16 px-12 pb-40">
        <div>
          <h1 class="text-4xl font-bold mb-3 text-white">
            Welcome to the new hiring journey
          </h1>

          <h3 class="text-2xl font-bold text-white">
            Please use your credentials to log in
          </h3>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-3 text-white">
            If you are not a member, please
          </h3>

          <PrimaryButton title="sign up" link="/signup" />
        </div>
      </aside>

      <div class="content p-40">
        <h1 class="text-3xl mb-12">Sign In</h1>
        <SignInForm />
      </div>
    </section>
  </main>
</template>

<style scoped>
aside {
  background: var(--primary-gradient);
  width: 40%;
}

.content {
  width: 60%;
}

@media (min-width: 1024px) {

}
</style>
