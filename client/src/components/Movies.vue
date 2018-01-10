<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Movies">
        <v-btn
          slot="action"
          :to="{ name: 'movies-create' }"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div 
          v-for="movie in movies" 
          class="movie"
          :key="movie.id">

          <v-layout>
            <v-flex xs6>
              <div class="movie-title">
                {{movie.title}}
              </div>
              <div class="movie-producer">
                {{movie.producer}}
              </div>
              <div class="movie-year">
                {{movie.year}}
              </div>

              <v-btn class="cyan"
                dark
                :to="{ 
                  name: 'movie', 
                  params: { 
                    movieId: movie.id 
                }}">
                View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="poster-image" :src="movie.posterUrl" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import MoviesService from '@/services/MoviesService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      movies: null
    }
  },
  async mounted () {
    this.movies = (await MoviesService.index()).data
  }
}
</script>

<style scoped>
.movie {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.movie-title {
  font-size: 30px;
}

.movie-producer {
  font-size: 24px;
}

.movie-year {
  font-size: 18px;
}

.poster-image {
  max-width: 70%;
  max-height: 80%;
  margin:0 auto;
}
</style>
