<script>
export default {
  name: "AsideNavigation",
  data() {
    return {
      linkClasses: "flex flex-col items-center justify-center gap-2 px-3 py-6 text-xs relative",
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
          icon: "people",
        },
      ],
    }
  }
};
</script>

<template>
<ul class="divide-y border-r h-full shadow-2xl">
  <li v-for="link in links" :key="link.title">
    <RouterLink :to="link.link" :class="linkClasses" :activeClass="linkActiveClasses">
      <inline_svg :src="link.icon" width="32" height="32"></inline_svg>
      <span class="break-words">{{ link.title }}</span>
    </RouterLink>
  </li>
</ul>
</template>
