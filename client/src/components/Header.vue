<template>
 <v-toolbar fixed class="light-blue lighten-5" dark>
     <v-toolbar-title class="mr-4">
         <img class="paw" src="@/assets/logo.png">
         <v-btn flat dark
         class="home"
         @click="navigateTo({name: 'root'})">
         Polar Prints
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
         v-if="$store.state.isUserLoggedIn"
         flat dark
           @click="logout">
           Logout
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
    },
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
    cursor: pointer; /* make a hand when hovering over a thing that is of class home */
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-bottom: 5%;
    right: 40%;
}
.paw {
  margin-top: 40px;
  height: 5%;
  width: 5%;
  right: 50%;
  margin-left: -20px;
}

</style>
