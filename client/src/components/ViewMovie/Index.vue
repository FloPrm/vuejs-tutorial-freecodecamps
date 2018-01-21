<template>
  <div>
    <v-layout class="mb-2">
      <v-flex xs6>
        <movie-info :movie="movie" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <movie-watch :movie="movie" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <movie-synopsis :synopsis="movie.synopsis" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import MovieInfo from './MovieInfo'
import MovieWatch from './MovieWatch'
import MovieSynopsis from './MovieSynopsis'
import MoviesService from '@/services/MoviesService'
export default {
  data () {
    return {
      movie: null
    }
  },
  async mounted () {
    const movieId = this.$store.state.route.params.movieId
    this.movie = (await MoviesService.show(movieId)).data
    console.log(movieId)
  },
  components: {
    MovieInfo,
    MovieWatch,
    MovieSynopsis
  }
}
</script>

<style scoped>
</style>
