<script>
import Submenu from '../shared/Submenu.vue';
export default {
  name: "AsideNavigation",
  data() {
    return {
      linkClasses: "flex flex-col items-center justify-center gap-2 px-3 py-6 text-xs text-center relative hover:color-primary hover:text-primary hover:fill-primary duration-200",
      linkActiveClasses: 'text-primary fill-primary color-primary before:bg-primary before:h-5/6 before:w-2 before:absolute before:left-0 before:rounded',
      links: [
        {
          title: "Quick Start",
          link: "/",
          icon: "playback",
        },
        {
          title: "Talent Acquisition",
          link: "/talent-acqusition",
          icon: "filter",
        },
        {
          title: "Human Resources",
          link: "/human-resources",
          submenu: true,
          icon: "people",
        },
      ],
      isOpen: false
    }
  },
  components: { Submenu },
  methods: {
    closeIfClickedOutside(e) {
      if (!document.querySelector('.aside-link').contains(e.target)) {
        this.isOpen = false
        document.removeEventListener('click', this.closeIfClickedOutside)
      }
    }
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
  <ul class="divide-y border-r h-full w-28  relative z-20 bg-white" :class="{'shadow-2xl': !isOpen}">
    <li v-for="link in links" :key="link.title" >
      <RouterLink class="" :to="link.link" custom v-slot="{ href, navigate, isExactActive, isActive }">
        <a v-if="link.submenu" @click="isOpen = !isOpen" class="aside-link cursor-pointer" :class="[linkClasses, isActive ? linkActiveClasses : '']">
          <inline_svg :src="link.icon" width="32" height="32"></inline_svg>
          <span class="break-words">{{ link.title }}</span>
        </a>

        <a v-else :href="href" @click="navigate" :class="[linkClasses, isExactActive ? linkActiveClasses : '']">
          <inline_svg :src="link.icon" width="32" height="32"></inline_svg>
          <span class="break-words">{{ link.title }}</span>
        </a>
      </RouterLink>
    </li>
  </ul>

  <transition name="slide-fade">
    <Submenu v-show="isOpen" />
  </transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  margin-left: -288px;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  width: 288px;
  margin-left: 0;
}
</style>
