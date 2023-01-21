import axios from 'axios'
import Cookies from 'js-cookie'

export const $host = axios.create({
  baseURL: 'http://localhost:4200/api/',
})

$host.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

export const $file = axios.create({
  baseURL: 'http://localhost:4200/api/',
  headers:{
    'Content-Type': 'multipart/form-data'
  }
})
$file.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)