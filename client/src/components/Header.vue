<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
       <router-link 
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        WatchList
      </router-link>
    </v-toolbar-title>
    
    <v-toolbar-items>
      <v-btn         
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        :to="{ name: 'movies' }">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        :to="{ name: 'login' }">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        :to="{ name: 'register' }">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark 
        @click="logout">
        Log Out
      </v-btn>          
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'root'
        })
      }
    }
  }
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
</style>
