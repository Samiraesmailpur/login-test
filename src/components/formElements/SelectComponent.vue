<script>
export default {
  name: "SelectComponent",
  data() {
    return {
      selectedValue: "Newest first",
      isActive: false,
      options: [
        { value: "Newest first", icon: "sharp-arrow-up" },
        { value: "Oldest first", icon: "sharp-arrow-down" }
      ]
    }
  },
  methods: {
    handleSelect(value) {
      this.selectedValue = value;
      this.isActive = false;
    },
    toggleDropdown() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<template>
  <div class="relative cursor-pointer">
    <div @click="toggleDropdown"
          class="flex items-center border border-solid border-gray-400 rounded-2xl text-gray-500 py-2 px-3 select-box"
          :class="{ 'bg-primary': isActive }">
      <span>Order by: {{ selectedValue }}</span>
      <inline_svg class="fill-gray-500" src="arrow-down" width="18" height="18"></inline_svg>
    </div>
    <ul class="absolute bg-white w-full top-10 left-0" :class="{ 'hidden': !isActive }">
      <li v-for="option in options"
          :key="option.value"
          class="p-3 flex items-center gap-1 hover:bg-slate-50"
          :class="{ 'selected': option.value === selectedValue }"
          @click="handleSelect(option.value)">
        <inline_svg class="fill-white" :src="option.icon" width="18" height="18"></inline_svg>
        <span>{{ option.value }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.select-box:hover,
.select-box.active {
  background-color: var(--primary-color);
  border-color: #fff;
  color: #fff;
  transition: all 200ms;
}

.select-box:hover svg,
.select-box.active svg {
  fill: #fff;
}

.selected svg {
  fill: var(--primary-color);
}
</style>
