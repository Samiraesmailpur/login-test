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
    },
    closeIfClickedOutside(event) {
      if (!document.querySelector('.select-box').contains(event.target)) {
        this.isActive = false
        document.removeEventListener('click', this.closeIfClickedOutside)
      }
    },
  },
  watch: {
    isActive(isActive) {
      if (isActive) {
        document.addEventListener('click', this.closeIfClickedOutside)
      }
    },
  },
};
</script>

<template>
  <div class="relative cursor-pointer">
    <div @click="toggleDropdown"
          class="flex items-center border border-solid border-gray-400 rounded-2xl text-gray-500 py-2 px-3 select-box w-52 h-10"
          :class="{ 'active': isActive }">
      <span>Order by: {{ selectedValue }}</span>
      <inline_svg class="fill-gray-500" src="arrow-down" width="18" height="18"></inline_svg>
    </div>
    <ul class="absolute bg-white w-full top-10 left-0" :class="{ 'hidden': !isActive }">
      <li v-for="option in options"
          :key="option.value"
          class="p-3 flex items-center gap-1 "
          :class="[ option.value === selectedValue ? 'bg-primary' : 'hover:bg-slate-50' ]"
          @click="handleSelect(option.value)">
        <inline_svg :class="[ option.value === selectedValue ? 'fill-primary' : 'fill-white' ]"
                    :src="option.icon"
                    width="18"
                    height="18">
        </inline_svg>
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
</style>
