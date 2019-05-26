<template>
  <p> {{id}} </p>
</template>

<script>
export default {
  data () {
    return {
      name: {},
      id: null
    }
  },
  async mounted () {
    if (this.$store.state.isUserLoggedIn) {
      this.id = this.$store.state.user.id
    }
  }
}
</script>

<style scoped>
.error {
    color:red
}
</style>
