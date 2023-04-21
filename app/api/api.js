import axios from 'axios'
import Cookies from 'js-cookie'

export const $host = axios.create({
  baseURL: '/api/',
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
  baseURL: '/api/',
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