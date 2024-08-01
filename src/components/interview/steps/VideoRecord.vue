<template>

  <div class="flex items-center justify-center h-full p-12">
    <div class="h-48	w-48 border-white border-solid border-8 rounded-full">
      <video v-if="isRecording" class="rounded-full w-full h-full p-6"  autoplay playsinline ref="video"></video>

      <button v-else id="btn-start-recording" class="rounded-full w-dull h-full text-white bg-burgundy font-medium p-6 btn-start 2s"
              @click="startRec">
        Start test recording
      </button>
      <!-- <button
        id="btn-stop-recording"
        @click="stopRec"
      >Stop Recording</button> -->
    </div>
  </div>
</template>

<script>
import RecordRTC from "recordrtc";
export default {
  name: "VideoRecord",
  data() {
    return {
      recorder: null,
      isRecording: false
    };
  },
  mounted() {},
  methods: {
    startRec() {
      this.isRecording = true;
      this.captureCamera(camera => {
        const video = this.$refs["video"];
        video.muted = true;
        video.volume = 0;
        video.srcObject = camera;
        this.recorder = RecordRTC(camera, {
          type: "video"
        });
        this.recorder.startRecording();
        // release camera on stopRecording
        this.recorder.camera = camera;
      });
    },
    stopRec() {
      this.isRecording = false;
      this.recorder.stopRecording(this.stopRecordingCallback);
    },
    captureCamera(callback) {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then(function(camera) {
          callback(camera);
        })
        .catch(function(error) {
          alert("Unable to capture your camera. Please check console logs.");
          console.error(error);
        });
    },
    stopRecordingCallback() {
      const video = this.$refs["video"];
      video.src = video.srcObject = null;
      video.muted = false;
      video.volume = 1;
      video.src = URL.createObjectURL(this.recorder.getBlob());

      this.recorder.camera.stop();
      this.recorder.destroy();
      this.recorder = null;
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
