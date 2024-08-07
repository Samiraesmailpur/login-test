<script>
import WelcomeStep  from "@/components/interview/steps/WelcomeStep.vue";
import HowItWorksStep  from "@/components/interview/steps/HowItWorksStep.vue";
import TestRecordingStep  from "@/components/interview/steps/TestRecordingStep.vue";
import FormStep  from "@/components/interview/steps/FormStep.vue";
import GetReadyStep from "@/components/interview/steps/GetReadyStep.vue";
import ThankYouStep from "@/components/interview/steps/ThankYouStep.vue";
import TroubleStep from "@/components/interview/steps/TroubleStep.vue";
import Button from "@/components/formElements/Button.vue";
import Interview from "@/components/interview/steps/Interview.vue";

export default {
  name: "Stepper",
  components: { WelcomeStep, HowItWorksStep, Button, GetReadyStep, ThankYouStep, Interview, TroubleStep },
  data() {
    return {
      currentStep: 1,
      animationClass: "",
      isRecordingStopped: false,
      isTrouble: false,
      stepper: {
        1: {
          component: WelcomeStep,
        },
        2: {
          component: HowItWorksStep,
          },
        3: {
          component: FormStep,
        },
        4: {
          component: TestRecordingStep,
        },
        5: {
          component: GetReadyStep,
        },
        6: {
          component: Interview,
        },
        7: {
          component: ThankYouStep,
        },
        8: {
          component: ThankYouStep
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
    troubleStep() {
      this.isTrouble = true;
      this.stepper[this.currentStep + 1].component = TroubleStep;
      this.next()
    }
  },
}
</script>

<template>
  <div class="flex shadow-round shadow-gray-300 max-w-5xl	sm:max-w-md	my-0 mx-auto sm:flex-col" :class="animationClass" ref="stepper">
      <component :is="this.stepper[this.currentStep].component" 
                 @stop-recording="isRecordingStopped = $event" 
                 @next-step="next"         
                 @previous-step="previous" 
                 @trouble-step="troubleStep">
      </component>
  </div>
</template>

<style>
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
