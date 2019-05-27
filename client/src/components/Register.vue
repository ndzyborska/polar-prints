<template>
<div>
  <img class ="br" src="~@/assets/bb.png" alt="Photo">
  <v-content>
    <br><br><br><br><br>
 <v-container fluid fill-height>
  <v-layout align-center justify-center>
  <v-flex xs-center sm8 md5>
    <div class="elevation-12" style="opacity: 0.7;">
      <v-toolbar flat dense class="d" dark>
      <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
         <v-text-field
            label="Email"
            v-model="email"
            single-line
          ></v-text-field>
             <v-text-field
            label="Password"
            type="password"
            v-model="password"
            single-line
          ></v-text-field>
    <br>
    <div class="error" v-html="error" />
    <v-btn
    dark
    class="b"
    @click="register">Register
    </v-btn>
    </div>
    </div>
  </v-flex>
</v-layout>
 </v-container>
 </v-content>
</div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      if (this.$store.state.isUserLoggedIn) {
        this.$router.push({name: 'foods'})
      }
    }
  }
}

</script>

<style scoped>
.error {
  color: red;
}
.br {
  min-height: 110%;
  width: 110%;
  height: auto;
  position: absolute;
  top: -15px;
  right:-20px;
  bottom: -20px;
}
.d {
  background-color: #005084;
}
.b {
  background-color: #005084;
  height: 20px;
}

</style>
