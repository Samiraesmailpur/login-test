<script>
export default {
  name: "SelectInputComponent",
  props: {
    data: {
      type: Array,
      required: true
    },
    selected: { type: String },
    placeHolder: { type: String },
    inputName: { type: String }
  },
  data() {
    return {
      selected: this.$props.selected,
      placeHolder: this.$props.placeHolder,
      data: this.$props.data,
      inputName: this.$props.inputName,
      isActive: false,
      searchQuery: ""
    }
  },
  methods: {
    handleSelect(option) {
      this.selected = option.value;
      this.placeHolder = option.label
      this.isActive = false;
    },
    toggleDropdown(event) {
      if (event.target.classList.contains('select-box-input')) return;
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
  computed: {
    filteredOptions() {
      return this.data.filter(option =>
        option.value.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<template>
  <div class="cursor-pointer flex">
    <slot v-if="$slots.prepend" name="prepend"></slot>

    <div @click="toggleDropdown"
         class="flex flex-grow items-center border border-solid border-gray-300 text-gray-500 py-2 px-3 select-box relative"
         :class="{ 'border-primary': isActive }">
      <span v-if="this.placeHolder">{{ this.placeHolder }}</span>
      <inline_svg class="absolute right-2 top-1/2 -translate-y-1/2 fill-gray-500"
                  :class="{ 'rotate-180' : isActive }"
                  src="arrow-down"
                  width="18" height="18"></inline_svg>

      <transition name="slide-fade">
        <div v-show="isActive" class="absolute w-full bg-white top-10 left-0 z-20 pt-3 border border-solid"
             :class="{ 'border-primary': isActive }">
          <div class="px-2">
            <input v-model="searchQuery" type="text"
                   class="select-box-input w-full border border-solid border-gray-500 mb-2 px-1 py-2 focus:outline-none"/>
          </div>
          <ul>
            <li v-for="option in filteredOptions" :key="option.value" class="p-3 flex items-center gap-1 "
                :class="[ option.value === selected ? 'bg-primary' : 'hover:bg-slate-50' ]"
                @click="handleSelect(option)">

              <span :class="[ option.value === selected ? 'text-white' : 'text:black' ]">{{ option.label }}</span>
              <input type="text" :name="this.inputName" hidden :value="option.value">
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <slot v-if="$slots.append" name="append"></slot>
  </div>
</template>
