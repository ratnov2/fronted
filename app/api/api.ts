import axios from 'axios'
import Cookies from 'js-cookie'

export const BASE_URL = 'https://test2-ratnov2.vercel.app/api'

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
  headers: {
    'Content-Type': 'multipart/form-data',
  },
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
