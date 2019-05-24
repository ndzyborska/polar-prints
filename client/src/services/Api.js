
import axios from 'axios' // connected for backend

export default () => { // axios- library for http request for backend
  return axios.create({
    baseURL: `http://localhost:8081/` // get connecter (return the connected which points to BACKEND API/url)
  })
}
