<template>
  <panel title="Movie General Information">
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
            name: 'movie-edit', 
            params: { 
              movieId: movie.id 
          }}">
          Edit
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="poster-image" :src="movie.posterUrl" />        
      </v-flex>
    </v-layout>
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
  max-height: 90%;
  margin:0 auto;
}
</style>
