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

const BASE_URL = 'https://cloud-api.yandex.net/v1/disk/'

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'y0_AgAAAABqLbx-AAnMIQAAAADhmuFo2UPIyJqzTY-444-bLvrI9GAQg_I',
  },
})
export const uploadFileInstance = axios.create({
  headers: {
    Authorization: 'y0_AgAAAABqLbx-AAnMIQAAAADhmuFo2UPIyJqzTY-444-bLvrI9GAQg_I',
    'Content-Type': 'multipart/form-data',
  },
})

export const DiscAPI = {
  async uploadFile(path: string, name: string, file: Blob) {
    const link = await instance.get(
      `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${path}/${name}`
    )
    const upload = await uploadFileInstance.put(link.data.href, file)
    return upload
  },
}
