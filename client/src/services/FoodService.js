import Api from '@/services/Api'

export default {
  foodNames (credentials) {
    return Api().post('food', credentials)
  }
}
