<script>
export default {
  props: ['response'],
}
</script>

<template>
  <div class="flex items-center border border-solid rounded-2xl overflow-hidden pr-12 hover:shadow-round">
    <img class="max-w-12 mr-4 " src="/images/talent-mock.jpg" alt="">

    <div class="flex sm:flex-col gap-8 sm:gap-2 items-center jusitfy-between w-full">
      <div class="flex-grow flex flex-col justify-between cursor-pointer hover:text-primary">
        <h1>{{ response.name }}</h1>

        <div class="flex items-center gap-1">
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

      <p class="text-gray-500 ta-left">{{ response.interview }}</p>
      <p class="text-gray-500">{{ response.date }}</p>
      <span class="text-xxs font-bold text-white uppercase p-1 rounded"
            :class="response.status.toLowerCase()">{{ response.status }}</span>
    </div>
  </div>
</template>

<style scoped>
  .pending {
    background-color: var(--status-badge-pending);
  }

  .approved {
    background-color: var(--status-badge-approved);
  }

  .executed {
    background-color: var(--status-badge-executed);
  }
</style>
