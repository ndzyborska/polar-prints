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
          label="season"
          v-model="food.season"
          required
           :rules="[rules.required]"
        ></v-text-field>
        <v-textarea
         label="Carbon Information"
         v-model="food.carbonMessage"
         required
          :rules="[rules.required]"
       ></v-textarea>
       <v-textarea
        label="Water Information"
        v-model="food.waterMessage"
        required
         :rules="[rules.required]"
      ></v-textarea>
      <v-textarea
       label="Seasonal Information"
       v-model="food.seasonMessage"
       required
        :rules="[rules.required]"
     ></v-textarea>
     <v-card class="error" v-html="error" />
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
        season: '',
        carbonMessage: '',
        waterMessage: '',
        seasonMessage: ''
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
        var tempName = this.food.name
        this.food.name = this.food.name.toLowerCase()
        await FoodService.create({
          name: this.food.name,
          carbon: this.food.carbon,
          water: this.food.water,
          season: this.food.season,
          carbonMessage: this.food.carbonMessage,
          waterMessage: this.food.waterMessage,
          seasonMessage: this.food.seasonMessage
        })
        this.$router.push({name: 'foods'})
      } catch (error) {
        this.food.name = tempName
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
    color: black;
    z-index: 4;
}
</style>
