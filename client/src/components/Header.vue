<template>
 <v-toolbar fixed class="cyan" dark>
     <v-toolbar-title class="mr-4">
         <v-btn flat dark
         class="home"
         @click="navigateTo({name: 'root'})">
         TabTracker
         </v-btn>
     </v-toolbar-title>

     <!-- Implement buttons
     <v-toolbar-items>
       <v-btn flat dark>
           Browse
       </v-btn>
     </v-toolbar-items> -->
    <v-spacer></v-spacer>

 <v-toolbar-items>
         <v-btn
         v-if="!$store.state.isUserLoggedIn"
         flat dark
           @click="navigateTo({name: 'foods'})">
           Foods
         </v-btn>
     </v-toolbar-items>

     <v-toolbar-items>
         <v-btn
         v-if="!$store.state.isUserLoggedIn"
         flat dark
           @click="navigateTo({name: 'login'})">
           Login
         </v-btn>
     </v-toolbar-items>

     <v-toolbar-items>
         <v-btn
         v-if="!$store.state.isUserLoggedIn"
         flat dark
         @click="navigateTo({name: 'register'})">
         Sign Up
        <!-- one way to do it:   <router-link to="register">
     Sign Up (without the @clikc and navigate to methods)
     </router-link> -->
         </v-btn>
     </v-toolbar-items>

     </v-toolbar>

</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>

<style scoped>
.home {
    cursor: pointer; /* make a hand when hovering over a thing that is of class home */
}

</style>
