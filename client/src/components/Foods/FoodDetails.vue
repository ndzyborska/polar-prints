<template>
  <p> {{food.carbon}} </p>
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
