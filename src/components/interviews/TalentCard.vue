<script>
import { FwbButton, FwbTooltip } from "flowbite-vue";
export default {
  name: "TalentCard",
  components: { FwbButton, FwbTooltip },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    toggleFlip() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<template>
  <div class="card rounded-2xl bg-white border hover:border-primary cursor-pointer relative duration-200 w-36 h-36"
      :class="{ flipped: isFlipped }">
    <div class="flex flex-col justify-between items-center w-full h-full absolute text-center rounded-sm py-3.5 px-1.5 front">
      <inline_svg @click="toggleFlip"
                  class="absolute top-2 right-3 fill-neutral-400 hover:fill-black"
                  src="hamburger"
                  width="15"
                  height="15">
      </inline_svg>
      <RouterLink to="/">
        <img class="w-12 h-12 rounded-full border-solid border-2 border-gray-300 hover:scale-110 duration-200"
             src="/images/talent-mock.jpg"
             alt="" />
      </RouterLink>
      <RouterLink to="/" class="text-base hover:text-primary duration-200">
        Sophie Wells
      </RouterLink>
      <p class="text-xs text-gray-500 font-semibold">06/13/2024 07:15 am</p>
    </div>
    <div class="back w-full h-full absolute text-center rounded-sm">
      <ul class="flex flex-col justify-between h-full px-3.5 py-6 relative">
        <li>
          <RouterLink to="/" class="flex items-center gap-2.5">
            <inline_svg class="text-aqua fill-aqua"
                        src="download"
                        width="13"
                        height="13">
            </inline_svg>
            <span class="hover:text-primary duration-200">Download</span>
          </RouterLink>
        </li>
        <hr />
        <li>
          <RouterLink to="/" class="flex items-center gap-2.5">
            <inline_svg class="fill-red" src="user" width="13" height="13"></inline_svg>
            <span class="hover:text-primary duration-200">Decline</span>
          </RouterLink>
        </li>
        <hr />
        <li>
          <RouterLink to="/" class="flex items-center gap-2.5">
            <inline_svg class="fill-red" src="trash" width="13" height="13"></inline_svg>
            <fwb-tooltip theme="light" placement="bottom">
              <template #trigger>
                <span class="hover:text-primary duration-200"> Delete </span>
              </template>
              <template #content>Delete</template>
            </fwb-tooltip>
          </RouterLink>
        </li>
      </ul>
      <inline_svg src="left-arrow"
                  class="fill-gray-400 absolute top-2.5 right-2.5 hover:fill-black"
                  width="16"
                  height="16"
                  @click="toggleFlip">
      </inline_svg>
    </div>
  </div>
</template>

<style scoped>
.card {
  transform-style: preserve-3d;
  z-index: 20;
}

.back,
.front {
  backface-visibility: hidden;
}

.card .back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>
