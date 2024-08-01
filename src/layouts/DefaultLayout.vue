<script>
import { RouterView } from "vue-router";
import AsideNavigation from "@/components/shared/AsideNavigation.vue";
import AppHeader from "@/components/shared/AppHeader.vue";
import { resizeMixin } from "@/mixins/resize";

export default {
  name: "DafaultLayout",
  mixins: [ resizeMixin ],
  data() {
    return {
      isOpen: true,
    }
  },
  components: { AsideNavigation, AppHeader },
  methods: {
    closeIfClickedOutside(e) {
      let burger = document.querySelector('.burger')
      let asideLink = document.querySelector('.aside-link')
      if (window.screen.width > 767) return;

      if (!burger.contains(e.target) && !asideLink.contains(e.target)) {
        this.isOpen = false
        document.removeEventListener('click', this.closeIfClickedOutside)
      }
    },
  },
  watch: {
    isOpen(isOpen) {
      if (isOpen) {
        document.addEventListener('click', this.closeIfClickedOutside)
      }
    },
  },
};
</script>

<template>
  <header class="fixed top-0 z-30 w-full">
    <AppHeader @toggle-aside="isOpen = $event" :isOpen="isOpen" />
  </header>
  <main class="flex pt-20" :class="{ close: !isOpen }">
    <transition name="slide-fade">
      <aside v-show="isOpen" class="sm:fixed bg-white sm:z-10 sm:inset-y-0 sm:top-12 sm:top-16">
        <AsideNavigation />
      </aside>
    </transition>
    <RouterView class="flex-grow" />
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

/* WIDTH HERE IS INTERCONNECTED, CHANGING WIDTH VALUE */
/* REQUIRES TO CHANGE MARGIN VALUE. IT'S NEEDED FOR SMOOTH ANIMATION */
.slide-fade-enter-from,
.slide-fade-leave-to {
  margin-left: -112px;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  width: 112px;
  margin-left: 0;
}
aside {
  width: 112px;
}
</style>
