import { saveToStorage } from '@/services/auth/auth.helper'
import {
  IActor,
  IGenre,
  IMovie,
  IMovieFavorite,
  IMoviePopular,
} from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'
import Cookies from 'js-cookie'
import { ICollection } from 'ui/collections/collections.types'
import { $file, $host } from './api'
import { getContentType } from './api.helpers'
import { TypePostAuth, TypesUserDataPut } from './api.interface'
import { IInputActor } from '@/components/AdminPanel/Edit/EditActor/actor-edit.interface'

export const genresApi = {
  async getAll(searchTerm?: string, url: string = '') {
    const response = await $host.get<IGenre[]>(`${url}/genres/`, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    })
    return response
  },
  async test(searchTerm?: string) {
    const response = await $host.get<IGenre[]>('/', {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    })
    return response
  },
  async getCollections(url = '') {
    return $host.get<ICollection[]>(`${url}/genres/collections`)
  },
  async getBySlug(slug: string) {
    const response = await $host.get<IGenre>(`genres/by-slug/${slug}`)
    return response
  },
  async delete(_id: string) {
    const response = await $host.delete<IGenre[]>(`genres/${_id}`)
    return response
  },
  async getMostPopularMovies() {
    const response = await $host.get('movies/popular')
    return response
  },
  async getOne(id: string) {
    const response = await $host.get<IGenre>(`genres/${id}`)
    return response
  },
  async putId(data: IGenre) {
    const response = await $host.put<IGenre>(`genres/${data._id}`, data)
    return response
  },
  async create() {
    const response = await $host.post<IGenre>(`genres/`)
    return response
  },
  async getByGenres(genreIds: string[]) {
    const response = $host.post<IMovie[]>(`movies/by-genres`, {
      genreIds,
    })
    return response
  },
}

export const authApi = {
  async login(body: TypePostAuth) {
    const response = await $host.post('auth/login', body)
    return response
  },
  async register(body: TypePostAuth) {
    const response = await $host.post('auth/register', body)
    return response
  },
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')
    const response = await $host.post(
      `/auth/login/access-token`,
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      }
    )

    if (response.data.accessToken) {
      saveToStorage(response.data)
    }

    return response
  },
  async check(body: TypePostAuth) {
    const response = await $host.post('auth/login', body)
    return response
  },
}

export const usersApi = {
  async count() {
    const response = await $host.get<number>('users/count')
    return response
  },
  async put(data: TypesUserDataPut) {
    const response = await $host.put<IUser>(`users/${data._id}`, data)
    return response
  },
  async getById(_id: string) {
    const response = await $host.get<IUser>(`users/${_id}`)
    return response
  },
  async getUsers(searchTerm?: string) {
    const response = await $host.get<IUser[]>('users', {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    })

    return response
  },
  async deleteUser(_id: string) {
    const response = await $host.delete(`users/${_id}`)
    return response
  },
  async getFavoriteFilms(url: string = '') {
    const response = await $host.get<IMovieFavorite[]>(
      `${url}/users/profile/favorites`
    )
    return response
  },
  async toggleFavoriteFilm(movieId: string) {
    const response = await $host.post(`users/profile/favorites`, {
      movieId,
    })

    return response
  },
}
export const movieApi = {
  async mostPopular(url: string = '') {
    const response = await $host.get<IMoviePopular[]>(
      `${url}/movies/most-popular`
    )
    return response
  },
  async create() {
    const response = await $host.post<string>('movies')
    return response
  },
  async getByGenres(genreIds?: string[] | string, url = '') {
    const response = await $host.post<IMovie[]>(`${url}/movies/by-genres`, {
      genreIds,
    })
    return response
  },
  async getByActor(actorId?: string) {
    const response = await $host.get<IMovie[]>(`movies/by-actor/${actorId}`)
    return response
  },
  async put(dataLog: any) {
    const response = await $host.put<IMovie[]>(`movies/${dataLog._id}`, dataLog)
    return response
  },
  async getById(_id: string) {
    const response = await $host.get<IMovie>(`movies/${_id}`)
    return response
  },
  async delete(_id: string) {
    const response = await $host.delete(`movies/${_id}`)
    return response
  },
  async countPost(slug: string) {
    const response = await $host.post(`movies/update-count-opened`, { slug })
    return response
  },
  async getBySlug(slug: string) {
    const response = await $host.get<IMovie>(`movies/by-slug/${slug}`)
    return response
  },
  async getAllMovies(searchTerm?: string, url = '') {
    const response = await $host.get<IMovie[]>(`${url}/movies`, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    })

    return response
  },
}

export const actorsApi = {
  async getAll(searchTerm?: string, url: string = '') {
    const response = await $host.get<IActor[]>(`${url}/actors`, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    })
    return response
  },
  async getOne(id: string) {
    const response = await $host.get<IActor>(`actors/${id}`)
    return response
  },
  async delete(_id: string) {
    const response = await $host.delete(`actors/${_id}`)
    return response
  },
  async create() {
    const response = await $host.post(`actors/`)
    return response
  },
  async putId(data: IInputActor) {
    const response = await $host.put(`actors/${data._id}`, data)
    return response
  },
}
export const fileApi = {
  async post(formData: any) {
    const response = $file.post('files/', formData)
    return response
  },
}

export const ratingApi = {
  async post(movieId: string, rating: number) {
    const response = $host.post('/ratings/set-rating', {
      movieId,
      value: rating,
    })
    return response
  },
}
// export const DiscAPI = {
//   async uploadFile(path:string,name:string,file:Blob){

//    const link = await instance.get(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=${path}/${name}`)
//    const upload = await uploadFileInstance.put(link.data.href,file)
//    return upload
//   }

// }
