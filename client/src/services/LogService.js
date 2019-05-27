import Api from '@/services/Api'

export default {
  addLog (logData) {
    return Api().post('addLog', logData)
  },
  retrieveLog (logData) {
    return Api().post('retrieveLog', logData)
  },
  clear (userId) {
    return Api().delete('clearData/' + userId)
  }
}
