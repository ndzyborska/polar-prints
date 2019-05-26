import Api from '@/services/Api'

export default {
  getFoods () {
    return Api().get('foods') // get request to the food enpoint returning foods
  },
  create (foodInfo) {
    return Api().post('newFood', foodInfo)
  },
  search (foodInfo) {
    return Api().post('search', foodInfo)
  },
  getFoodDetails (foodId) {
    return Api().get('foods/' + foodId)
  }
}
