<template>
<<<<<<< HEAD
  <p> {{food.name}} </p>
=======
  <p> {{food.carbon}} </p>
>>>>>>> 44502ca034245a4b60c7a9c4d7748e3a96cd3b7b
</template>

<script>
import FoodService from '@/services/FoodService'
export default {
  data () {
    return {
      food: {}
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.foodId
    this.food = (await FoodService.getFoodDetails(id)).data
    console.log(this.food)
  }
}
</script>

<style scoped>
.error {
    color:red
}
</style>
