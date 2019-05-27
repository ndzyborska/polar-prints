<template>
<panel title="log">
        <v-list three-line>
          <template v-for="foodInfo in foods">
            <v-list-tile
            v-bind:key="foodInfo.food.name">
              <v-list-tile-content>
                <v-list-tile-title>
                </v-list-tile-title>
              <v-list-tile-title>{{foodInfo.food.name}} {{foodInfo.count}}</v-list-tile-title>
              <v-list-tile-sub-title> {{foodInfo.food.carbon}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{foodInfo.food.water}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{foodInfo.food.ethics}}</v-list-tile-sub-title>
            </v-list-tile-content>
                </v-list-tile>
          </template>
        </v-list>
        <div class="error" v-html="error" />
        <v-btn
            dark
            class="cyan"
            @click="clear">
            clear
            </v-btn>
      </panel>
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
    }
  },

  async mounted () {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push({name: 'home'})
    } else {
      const id = this.$store.state.user.id
      try {
        this.logData = await LogService.retrieveLog({
          userId: id
        })
      } catch (error) {
        this.error = error.response.error
      }
      for (var i = 0; i < this.logData.data.length; i++) {
        try {
          var exist = false
          const id = this.logData.data[i].foodId
          for (var j = 0; j < this.foods.length; j++) {
            if (this.foods[j].food.id == this.logData.data[i].foodId) {
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
      console.log(this.foods)
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
