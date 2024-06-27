import { IActor, IGenre, IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import React, { FC, useRef, useState } from 'react'
import style from './movie-page.module.scss'

import { IoMdStar } from 'react-icons/io'
import Link from 'next/link'
import FavoriteButton from '../../ui/favorite-button/FavoriteButton'
import { getActorUrl, getGenreUrl } from '@/configs/url.config'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import { ImgWithLoader } from 'ui/img-with-loader/ImgWithLoader'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { movieApi, usersApi } from '@/api/dataAPI'
import { useAuthState } from '@/hooks/useAuthState'
import { useFavorites } from '../favorites/useFavorites'

export interface TypesMoviePoster {
  actor?: IActor[]
  genre?: IGenre[]
}

const MoviePoster: FC<TypesMoviePoster> = ({ actor, genre }) => {
  const { query } = useRouter()
  const { user } = useAuthState()
  const movie = useQuery(String(query.movie), () =>
    movieApi.getById(String(query.movie))
  )
  const { favoritesMovies } = useFavorites()
  
  return (
    <div className={style.BigPoster}>
      <ImgWithLoader
        img={movie.data?.data.bigPoster}
        className="w-full "
      />
      {movie.data?.data && (
        <>
          <div className={style.description}>
            <h1>{movie.data.data.title}</h1>
            <p className={style.parameters}>
              {movie.data.data.parameters?.year} ·{' '}
              {movie.data.data.parameters?.country} ·{' '}
              {movie.data.data.parameters?.duration}
            </p>
            <p className={style.ArrayType}>
              <span>Genres: </span>
              {genre?.map((el, idx) => {
                return (
                  <Link key={el._id} href={getGenreUrl(el.slug)}>
                    <span>
                      {el.name}
                      {genre[idx + 1] ? ',' : ''}
                    </span>
                  </Link>
                )
              })}
            </p>
            <p className={style.ArrayType}>
              <span>Actors: </span>
              {actor?.map((el, idx) => {
                return (
                  <Link key={el._id} href={getActorUrl(el.slug)}>
                    <span>
                      {el.name}
                      {actor[idx + 1] ? ',' : ''}
                    </span>
                  </Link>
                )
              })}
            </p>
          </div>

          <div className={style.favorites}>
            <span>
              {user && favoritesMovies && (
                <FavoriteButton
                  movieId={movie.data.data._id}
                  favoritesMovies={favoritesMovies}
                />
              )}
            </span>

            <span>
              <IoMdStar />
              <span>{movie.data.data.rating}</span>
            </span>
          </div>
        </>
      )}
    </div>
  )
}

export default MoviePoster
