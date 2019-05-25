<template>
  <div class="home">
        <img class = "paw" src="@/assets/logo.png">
            <h1>{{ msg }}</h1>
    <h2>How is your food print today?</h2>
<search/>
  </div>
</template>

<script>
import Search from './Search'
export default {
  components: {
    Search
  },
  data () {
    return {
      search: '',
      msg: 'Polar Prints'
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
