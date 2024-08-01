<script>
import InputComponent from '@/components/formElements/InputComponent.vue';
export default {
  name: "FormStep",
  components: { InputComponent }
}
</script>

<template>
  <div>
    <h2 class="text-3xl font-light mb-12">Step 1. Introduce yourself</h2>
    <form class="flex flex-col gap-4 mb-14">
      <InputComponent type="text" label="Full name"/>
      <InputComponent type="text" label="Email" />
      <InputComponent type="text" label="Phone"/>
    </form>
  </div>
</template>
