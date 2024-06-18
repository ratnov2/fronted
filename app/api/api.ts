import axios from 'axios'
import Cookies from 'js-cookie'

console.log(process.env.NEXT_PUBLIC_BASE_URL);


export const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

export const $host = axios.create({
  baseURL: BASE_URL,
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
