<script>
import WelcomeStep  from "@/components/interview/steps/WelcomeStep.vue";
import HowItWorksStep  from "@/components/interview/steps/HowItWorksStep.vue";
import TestRecordingStep  from "@/components/interview/steps/TestRecordingStep.vue";
import FormStep  from "@/components/interview/steps/FormStep.vue";
import VideoRecord  from "@/components/interview/steps/VideoRecord.vue";
import Button from "@/components/formElements/Button.vue";
import illustation from "../../assets/images/icons/illustration.jpg"

export default {
  name: "Stepper",
  components: { WelcomeStep, HowItWorksStep, Button, VideoRecord },
  data() {
    return {
      currentStep: 1,
      animationClass: "",
      stepper: {
        1: {
          rightSide: {
            component: WelcomeStep,
          } ,
          leftSide: illustation
        },
        2: {
          rightSide: {
            component: HowItWorksStep,
            previousBtn: "Welcome"
          } ,
          leftSide: illustation
        },
        3: {
          rightSide: {
            component: FormStep,
            previousBtn:"How it works?"
          } ,
          leftSide: illustation
        },
        4: {
          rightSide: {
            component: TestRecordingStep,
            previousBtn:"Step 1. Introduce yourself"
          } ,
          leftSide: VideoRecord
        }
      }
    }
  },
  methods: {
    next() {
      if(this.currentStep > Object.keys(this.stepper).length) return;
      this.currentStep++;
      this.animationClass = "step-right";
      this.$refs.stepper.addEventListener("animationend", this.resetStep);
    },
    previous() {
      if(this.currentStep < 1 ) return;
      this.currentStep--;
      this.animationClass = "step-left";
      this.$refs.stepper.addEventListener("animationend", this.resetStep);
    },
    resetStep() {
      this.animationClass = "";
      this.$refs.stepper.removeEventListener("animationend", this.resetStep);
    },
  },
}
</script>

<template>
  <div class="flex shadow-round shadow-gray-300 max-w-4xl	sm:max-w-md	my-0 mx-auto sm:flex-col" :class="animationClass" ref="stepper">
    <div class="w-2/5 left-side sm:w-full sm:max-h-36">
      <img v-if="typeof stepper[currentStep].leftSide === 'string'"
           :src="stepper[currentStep].leftSide" alt=""
           class="w-full h-full sm:max-h-36 object-contain">

      <component v-else :is="stepper[currentStep].leftSide" />
    </div>

    <div class="py-16 px-14 w-3/5 relative sm:w-full sm:h-full">
      <component :is="stepper[currentStep].rightSide.component" />

      <Button @click="next"
              v-show="currentStep < Object.keys(this.stepper).length"
              class="mt-12"
              kind="primary">
        Next
      </Button>
      <button @click="previous"
              v-show="currentStep > 1"
              class="text-primary flex items-center previous-btn border-primary absolute bottom-3.5 text-xs font-medium">

        <inline_svg class="fill-primary" src="arrow-left" width="9" height="9"></inline_svg>

        {{ stepper[currentStep].rightSide.previousBtn }}
      </button>
    </div>
  </div>
</template>


<style scoped>
.step-right {
  animation: step-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes step-right  {
  0% {
    transform: translateZ(-1400px) translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
}

.step-left {
  animation: step-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes step-left {
  0% {
    transform: translateZ(1400px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
}

.left-side {
  background: linear-gradient(#f07e27 0%, #f8a551 100%);
}


.left-side {
  background: linear-gradient(#f07e27 0%, #f8a551 100%);
}

img {
  mix-blend-mode: multiply;
}

.previous-btn {
  border-bottom: 1px dashed;
}
</style>
