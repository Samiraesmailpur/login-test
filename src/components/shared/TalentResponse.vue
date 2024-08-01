<script>
import StatusBadge from './StatusBadge.vue';
export default {
  props: ['response'],
  components: { StatusBadge }
}
</script>

<template>
  <div class="flex items-center border border-solid rounded-2xl overflow-hidden pr-12 md:pr-2 sm:p-2 hover:shadow-round">
    <img class="max-w-10 mr-4 sm:h-10 sm:w-10 flex-shrink-0 sm:rounded-full sm:self-start" src="/images/talent-mock.jpg" alt="">
    <div class="flex items-center jusitfy-between w-full sm:flex-col sm:items-start sm:gap-2 sm:flex-wrap">
      <div class="flex-grow flex flex-col justify-between cursor-pointer sm:w-full hover:text-primary">
        <div class="flex gap-2">
          <h1 class="sm:flex-grow">{{ response.name }}</h1>
          <div class="hidden sm:flex items-center gap-1">
            <div class="inline-flex p-1 border border-solid rounded border-lime-500">
              <inline_svg src="thumb-up" width="14" height="14" class="fill-lime-500"></inline_svg>
              <span class="text-xs text-black ml-1">{{ response.likes }}</span>
            </div>
            <div class="inline-flex p-1 border border-solid rounded border-rose-500">
              <span class="text-xs text-black mr-1">{{ response.dislikes }}</span>
              <inline_svg src="thumb-down" width="14" height="14" class="fill-rose-500"></inline_svg>
            </div>
          </div>
          <StatusBadge :status="response.status" compact class="hidden sm:block"/>
        </div>
        <div class="flex items-center gap-1 sm:hidden">
          <div class="inline-flex p-1 border border-solid rounded border-lime-500">
            <inline_svg src="thumb-up" width="14" height="14" class="fill-lime-500"></inline_svg>
            <span class="text-xs text-black ml-1">{{ response.likes }}</span>
          </div>
          <div class="inline-flex p-1 border border-solid rounded border-rose-500">
            <span class="text-xs text-black mr-1">{{ response.dislikes }}</span>
            <inline_svg src="thumb-down" width="14" height="14" class="fill-rose-500"></inline_svg>
          </div>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <div>
          <p class="text-gray-500 text-xs ta-left truncate">{{ response.interview }}</p>
          <p class="text-gray-500 text-xs inline">{{ response.date }}</p>
        </div>
        <StatusBadge :status="response.status" compact class="sm:hidden" />
      </div>
    </div>
  </div>
</template>
