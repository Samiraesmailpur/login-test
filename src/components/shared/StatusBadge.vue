<script>
const classMap = {
  'pending': "bg-status-badge-brown",
  'analisys': "bg-status-badge-brown",
  'approved': "bg-status-badge-aqua",
  'inbox': "bg-primary",
  'feedback preparation': "bg-status-badge-aqua",
  'processed': "bg-status-badge-lime"
}
export default {
  name: "StatusBadge",
  props: {
    status: {
      type: String,
      required: true,
      default: Object.keys(classMap)[0],
      validator(value, props) {
        if(!Object.keys(classMap).includes(value)) return;
        return true;
      }
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: true,
      classMap: classMap,
    };
  },
};
</script>

<template>
  <span v-if="compact" class="text-xxs font-bold text-white uppercase p-1 rounded" :class="this.classMap[status]">
    {{ status }}
  </span>

  <div v-else class="relative after:content-[''] after:absolute after:w-full after:h-px after:bg-gray-200 
        after:top-2/4 after:left-0 after:-z-10 z-20 mb-3">
    <h3 class="flex items-center gap-3 w-fit rounded-md p-1 text-white font-semibold text-xs"
        :class="this.classMap[status]">{{ status.toUpperCase() }}
      <inline_svg src="zoom-out" class="cursor-pointer" width="20" height="20" v-if="isOpen" @click="isOpen=!isOpen"></inline_svg>
      <inline_svg src="zoom-in" class="cursor-pointer" width="20" height="20"  v-if="!isOpen" @click="isOpen=!isOpen"></inline_svg>
    </h3>
  </div>
</template>