<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
       <router-link 
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        TabTracker
      </router-link>
    </v-toolbar-title>
    
    <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        to="login">
        Login
      </v-btn>  
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        to="register">
        Sign Up
      </v-btn>       
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
</style>
