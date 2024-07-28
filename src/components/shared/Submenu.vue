<script>
const items = [
  { link: "/employee-management", title: "Employee Management", icon: "compass" },
  { link: "/employee-engagement", title: "Employee Engagement", icon: "energy" },
  { link: "/employee-assessment", title: "Employee Assessment", icon: "speedometer" },
]
export default {
  name: "Submenu",
  data() {
    return {
      items: items,
    }
  },
};
</script>

<template>
  <div class="fixed bg-white z-10 inset-y-0 sm:top-12 top-16 left-28 px-4 py-8 w-72 shadow-2xl">
    <ul class="flex flex-col">
      <li v-for="item in items" class="flex items-center gap-1">
        <RouterLink :to="item.link" class="px-3 py-3 flex items-center gap-3 hover:text-primary duration-200">
          <inline_svg :src="item.icon" width="16" height="17" class="fill-gray-500"></inline_svg>
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
