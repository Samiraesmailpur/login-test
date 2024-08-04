<template>

  <div class="flex items-center justify-center h-full p-12">
    <div class="h-48	w-48 border-white border-solid border-8 rounded-full">
      <video v-if="isRecording" class="rounded-full w-full h-full object-cover"  autoplay playsinline ref="video"></video>

      <button v-else id="btn-start-recording" class="rounded-full w-dull h-full text-white bg-burgundy font-medium p-6 btn-start 2s"
              @click="startRec">
        Start test recording
      </button>
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
        // video.muted = true;
        // video.volume = 0;
        video.srcObject = camera;
        this.recorder = RecordRTC(camera, {
          type: "video",
          video: video,
          canvas: {
            width: 400,
            height: 400
          }
        });
        this.recorder.setRecordingDuration(10_000)
        this.recorder.startRecording();

        this.recorder.stopRecording = (blob) => this.stopRecordingCallback(blob);
        // release camera on stopRecording
        this.recorder.camera = camera;
      });
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
    stopRecordingCallback(state) {
      console.log("THE RECORDING HAS BEEN STOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPED");
      if (state != "stopped") return;

      this.isRecording = false;

      const video = this.$refs["video"];
      video.src = video.srcObject = null;
      // video.muted = false;
      // video.volume = 1;
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
