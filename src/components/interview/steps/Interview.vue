<script>
import Button from '@/components/formElements/Button.vue';
import RecordRTC from 'recordrtc'; // Assuming RecordRTC is imported properly

export default {
  name: "Interview",
  data() {
    return {
      currentQuestion: 1,
      recorder: null,
      isRecording: false,
      isRecordingStopped: false,
      isPlayBack: false,
      videoSrc: null,
      questions: {
        1: { question: 'How are you?' },
        2: { question: 'What is your name?' },
        3: { question: 'Where are you from?' },
        4: { question: 'What do you do?' },
        5: { question: 'What are your hobbies?' },
      }
    };
  },
  components: { Button },
  methods: {
    nextQuestion() {
      if (this.currentQuestion < Object.keys(this.questions).length) {
        this.currentQuestion++;
      }
      else {
        this.$emit('next-step')
      }
    },
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
        this.recorder.setRecordingDuration(10000, this.stopRecordingCallback.bind(this)); // 10 seconds for demo
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

  <div class="py-11 px-11 w-3/5 relative sm:w-full sm:h-full flex flex-col gap-5">
    <div>
      <sup class="text-lg">{{ currentQuestion }}</sup>
      <sub class="text-lg">{{ Object.keys(questions).length }}</sub>
    </div>
    <hr>
    <p>{{ questions[currentQuestion].question }}</p>
    <Button kind="primary" @click="nextQuestion" class="min-w-96 self-center">
      {{ currentQuestion === Object.keys(questions).length ? 'Finish interview' : 'Next question' }}
    </Button>
  </div>
</template>


<style>
sup {
  position: relative;
}
sup::after {
  content: '';
    position: absolute;
    top: 22%;
    height: 26px;
    width: 1px;
    background: black;
    transform: rotate(25deg);
}

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