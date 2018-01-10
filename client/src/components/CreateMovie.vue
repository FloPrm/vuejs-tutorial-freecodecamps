<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Movie General Information">
        <v-text-field      
          label="Title"
          :rules="[required]"
          required
          v-model="movie.title"
        ></v-text-field>
        <v-text-field      
          label="Producer"          
          required
          :rules="[required]"
          v-model="movie.producer"
        ></v-text-field>
        <v-text-field      
          label="Year"
          required
          :rules="[required]"
          v-model="movie.year"
        ></v-text-field>
        <v-text-field      
          label="Film Poster Url"
          required
          :rules="[required]"          
          v-model="movie.posterUrl"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel 
        title="Synopsis and more"
        class="ml-2">
        <v-text-field      
          label="Synopsis"
          required
          :rules="[required]"          
          v-model="movie.synopsis"
          multi-line
        ></v-text-field>
        <v-text-field      
          label="Youtube link"
          required
          :rules="[required]"          
          v-model="movie.youtubeId"
        ></v-text-field>
        <v-text-field      
          label="Download Link"
          required
          :rules="[required]"          
          v-model="movie.downloadLink"
        ></v-text-field>
      </panel>
      
      <div class="error-alert" v-if="error">
        {{error}}
      </div>
      <v-btn class="cyan"
        dark
        @click="create">
        Create Movie 
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import MoviesService from '@/services/MoviesService'

export default {
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFiledsFilledIn = Object
        .keys(this.movie)
        .every(key => !!this.movie[key])
      if (!areAllFiledsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await MoviesService.post(this.movie)
        this.$router.push({
          name: 'movies'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      movie:
      {
        title: null,
        producer: null,
        year: null,
        posterUrl: null,
        youtubeId: null,
        synopsis: null,
        downloadLink: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  }
}
</script>

<style scoped>
</style>
