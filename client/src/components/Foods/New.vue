<template>
<div>
    <panel title="Enter a Food">
        <v-text-field
          label="Name"
          v-model="food.name"
          required
          :rules="[rules.required]"
        ></v-text-field>
         <v-text-field
          label="Carbon Footprint"
          v-model="food.carbon"
          required
           :rules="[rules.required]"
        ></v-text-field>
         <v-text-field
          label="Water"
          v-model="food.water"
          required
           :rules="[rules.required]"
        ></v-text-field>
         <v-text-field
          label="Ethics"
          v-model="food.ethics"
          required
           :rules="[rules.required]"
        ></v-text-field>
    <div class="error" v-html="error" />
    <br>
    </panel>
    <v-btn
        dark
        class="cyan"
        @click="create">
        Enter
        </v-btn>
</div>
</template>

<script>
import FoodService from '@/services/FoodService'
import Panel from '../Panel'
export default {
  data () {
    return {
      food: {
        name: '',
        carbon: '',
        water: '',
        ethics: ''
      },
      error: null,
      rules: {
        required: (value) => !!value || 'Required'
      }
    }
  },
  methods: {
    async create () {
      const fieldsFilled = Object
        .keys(this.food)
        .every(key => !!this.food[key])
      if (!fieldsFilled) {
        this.error = 'Missing information.'
        return
      }
      try {
        await FoodService.create({
          name: this.food.name,
          carbon: this.food.carbon,
          water: this.food.water,
          ethics: this.food.ethics
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
    color:red
}
</style>
