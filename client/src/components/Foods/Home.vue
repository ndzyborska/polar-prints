<template>

  <div class="home">
     <v-btn
        dark
        class="cyan"
        @click="navigateTo({name: 'newFood'})">
        new
        </v-btn>
        <img class = "paw" src="@/assets/logo.png">
            <h1></h1>
    <h2>How is your food print today?</h2>
        <v-text-field
            label="Type the food here"
            v-model="name"
            single-line
          ></v-text-field>
           <br>
    <div class="error" v-html="error" />
    <br>
           <v-btn
            dark
            class="cyan"
            @click="search"
            >Search
           </v-btn>
           <v-btn
            dark
            class="cyan"
            >Add
           </v-btn>
  </div>
</template>

<script>

import FoodService from '@/services/FoodService'
export default {
  data () {
    return {
      name: null,
      error: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async search () {
      try {
        const response = await FoodService.search({
          name: this.name
        })
        if (response.data.length === 0) {
          this.error = 'no food found'
        } else {
          this.$router.push('/foods/' + response.data[0].name)
        }
      } catch (error) {
        this.error = error.response.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
  font-size: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.paw {
  width: 20%;
  height: 20%;
}
a {
  color: #42b983;
}
</style>
