<script setup lang="ts">
import { ref } from 'vue';

  const videoPlayer = ref<HTMLVideoElement | null>(null)

  const playVideo = () => {
    videoPlayer.value?.play()
  }

  const pauseVideo = () => {
  videoPlayer.value?.pause()
}
</script>

<template>
  <video ref="videoPlayer" src="https://videos.pexels.com/video-files/27545637/12164137_1920_1080_60fps.mp4"></video>

  <button @click="playVideo">再生</button>
  <button @click="pauseVideo">停止</button>
</template>

<style scoped>
video {
  width: 100%;
}
</style>