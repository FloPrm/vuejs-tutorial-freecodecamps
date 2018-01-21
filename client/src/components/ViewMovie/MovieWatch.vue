<template>
  <panel title="Watch">
    <youtube 
      :video-id="movie.youtubeId"
      :player-width="500"
      :player-height="300">
    </youtube>
    <p>
      <a :href="movie.downloadLink">Download here</a>
    </p>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'movie'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
