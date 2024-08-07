<template>
  <div class="w-2/5 left-side sm:w-full sm:max-h-36">
    <div class="flex items-center justify-center h-full p-12">
      <div class="h-48 w-48 border-white border-solid border-8 rounded-full">
        <video v-if="isRecording || isPlayBack" 
               class="rounded-full w-full h-full object-cover" 
               autoplay playsinline 
               ref="video" 
               :src="videoSrc">
        </video>
        <button v-else 
                id="btn-start-recording" 
                class="rounded-full w-full h-full text-white bg-burgundy font-medium p-6 btn-start 2s"
                :class="{'bg-green' : isRecordingStopped}"
                @click="toggleRecording">
          {{ isRecordingStopped ? 'Playback' : 'Start test recording' }}
        </button>
      </div>
    </div>
  </div>
  
  <div class="py-16 px-14 w-3/5 relative sm:w-full sm:h-full">
    <div class="flex flex-col gap-4" v-if="isRecordingStopped">
      <h2 class="text-3xl font-light">Was the recording successful?</h2>
      <p class="font-light">
        Do you <strong>see and hear yourself</strong>? When recording for the first time on some devices, there may be problems with video or sound, in which case, repeat the recording.
      </p>
      <div class="flex justify-between gap-3">
        <Button kind="primary-red" class="w-full max-w-[50%] relative"  @click="$emit('trouble-step', isTrouble)">
          <inline_svg src="exclamation" width="22" height="22" class="absolute top-[50%] left-4 -translate-y-1/2"></inline_svg>
          Having trouble
        </Button>
        <Button kind="primary-aqua" class="w-full max-w-[50%] relative" @click="startRec">
          <inline_svg src="record" width="22" height="22" class="absolute top-[50%] left-4 -translate-y-1/2"></inline_svg>
          Re-record
        </Button>
      </div>
      <Button @click="$emit('next-step')" class="mt-12" kind="primary">
        Everything is fine
      </Button>
    </div>
    <div class="flex flex-col gap-8 pb-6" v-else>
      <h2 class="text-3xl font-light">Step 2. Let's check your device</h2>
      <p class="font-light">On your device, please grant access to your camera and microphone.
        <strong>Run a test recording</strong> to ensure you can see and hear yourself clearly.
      </p>
      <p class="font-light text-primary">Don’t worry, this is just a test recording, and won’t be shared with anyone else.</p>
    </div>
    <button @click="$emit('previous-step')"
              class="text-primary flex items-center previous-btn border-primary absolute bottom-3.5 text-xs font-medium">
      <inline_svg class="fill-primary" src="arrow-left" width="9" height="9"></inline_svg>
      Step 1. Introduce yourself
    </button>
  </div>
</template>



<script>
import RecordRTC from "recordrtc";
import Button from "@/components/formElements/Button.vue";

export default {
  name: "TestRecordingStep",
  data() {
    return {
      recorder: null,
      isRecording: false,
      isRecordingStopped: false,
      isPlayBack: false,
      videoSrc: null,
      isTrouble: false
    };
  },
  components: { Button },
  methods: {
    startRec() {
      this.isRecording = true;
      this.isPlayBack = false;
      this.captureCamera(camera => {
        const video = this.$refs.video;
        video.srcObject = camera;
        this.recorder = RecordRTC(camera, {
          type: "video",
          video: video,
          canvas: {
            width: 400,
            height: 400
          }
        });
        this.recorder.setRecordingDuration(1000, this.stopRecordingCallback);
        this.recorder.startRecording();
        this.recorder.camera = camera;
      });
    },
    captureCamera(callback) {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then(camera => {
          callback(camera);
        })
        .catch(error => {
          alert("Unable to capture your camera. Please check console logs.");
          console.error(error);
        });
    },
    stopRecordingCallback() {
      this.isRecording = false;
      const video = this.$refs.video;
      video.srcObject = null;
      this.videoSrc = URL.createObjectURL(this.recorder.getBlob());
      this.recorder.camera.stop();
      this.isRecordingStopped = true;
      this.$emit("stop-recording", this.isRecordingStopped);
    },
    toggleRecording() {
      if (this.isRecordingStopped) {
        this.playback();
      } else {
        this.startRec();
      }
    },
    playback() {
      this.isPlayBack = true;
      this.isRecording = false;
    }
  }
};
</script>


<style scoped>
.btn-start {
  animation: pulse 2s ease-in-out infinite both;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

</style>