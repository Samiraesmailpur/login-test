<script setup>
import { RouterView } from "vue-router";
import AsideNavigation from "./components/shared/AsideNavigation.vue";
import AppHeader from "./components/shared/AppHeader.vue";
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="flex">
    <aside>
      <AsideNavigation />
    </aside>

    <RouterView class="flex-grow" />
  </main>
</template>
