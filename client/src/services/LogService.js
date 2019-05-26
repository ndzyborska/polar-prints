import Api from '@/services/Api'

export default {
  addLog (logData) {
    return Api().post('addLog', logData)
  }
}
