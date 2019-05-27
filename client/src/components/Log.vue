<template>
  <v-flex xs6 offset-xs3>

    <panel title="log">
        <v-list three-line>
          <template v-for="foodInfo in foods">
            <v-list-tile
            v-bind:key="foodInfo.food.name">
              <v-list-tile-content>
              <v-list-tile-title class="foodInfo">Food: {{foodInfo.food.name}} times {{foodInfo.count}} </v-list-tile-title>
              <v-list-tile-sub-title class="foodInfo">carbon rating: {{foodInfo.food.carbon}}</v-list-tile-sub-title>
                <v-list-tile-sub-title class="foodInfo">water rating: {{foodInfo.food.water}}</v-list-tile-sub-title>
                <v-list-tile-sub-title class="foodInfo">season: {{foodInfo.food.season}}</v-list-tile-sub-title>
            </v-list-tile-content>
                </v-list-tile>
          </template>
        </v-list>
         <v-card>Average carbon rating: {{averages.carbonAverage}}</v-card>
        <v-card>Average water rating: {{averages.waterAverage}} </v-card>
         <v-card class="error" v-html="error" />
        <v-btn
            dark
            class="cyan"
            @click="clear">
            clear
            </v-btn>
      </panel>
    </v-flex>

</template>

<script>
import LogService from '@/services/LogService'
import FoodService from '@/services/FoodService'
import Panel from './Panel'
export default {
  data () {
    return {
      logData: {},
      foods: [],
      error: null,
      averages:
      {
        carbonAverage: 0,
        waterAverage: 0
      }
    }
  },
  async mounted () {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push({name: 'foods'})
    } else {
      const id = this.$store.state.user.id
      try {
        this.logData = await LogService.retrieveLog({
          userId: id
        })
      } catch (error) {
        this.error = error.response.error
      }
      await this.getAmounts()
      await this.getAverages()
    }
  },
  methods: {
    async clear () {
      try {
        const state = LogService.clear(this.$store.state.user.id)
        if (state) {
          this.$router.go()
        } else {
          this.error = 'could not delete log'
        }
      } catch (error) {
        this.error = error.response.error
      }
    },
    async getAmounts () {
      for (var i = 0; i < this.logData.data.length; i++) {
        try {
          var exist = false
          const id = this.logData.data[i].foodId
          for (var j = 0; j < this.foods.length; j++) {
            if (this.foods[j].food.id === this.logData.data[i].foodId) {
              this.foods[j].count++
              exist = true
            }
          }
          if (exist === false) {
            const response = await FoodService.getFoodDetails(id)
            this.foods.push(
              {
                food: response.data,
                count: 1
              })
          }
        } catch (error) {
          this.error = error.response.error
        }
      }
    },
    async getAverages () {
      console.log(this.foods[0].food.carbon)
      for (var i = 0; i < this.foods.length; i++) {
        this.averages.carbonAverage = Number(this.averages.carbonAverage) + (Number(this.foods[i].food.carbon) * this.foods[i].count)
        this.averages.waterAverage = Number(this.averages.waterAverage) + (Number(this.foods[i].food.water) * this.foods[i].count)
      }
      this.averages.carbonAverage = Number(this.averages.carbonAverage) / Number(this.logData.data.length)
      this.averages.waterAverage = Number(this.averages.waterAverage) / Number(this.logData.data.length)
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
.foodInfo {
  color: red;
  text-align: center;
}
.listInfo {
  text-align: center;
}
</style>
