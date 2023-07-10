import { IActor, IGenre, IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import React, { FC } from 'react'
import style from './movie-page.module.scss'

import { IoMdStar } from 'react-icons/io'
import Link from 'next/link'
import FavoriteButton from '../../ui/favorite-button/FavoriteButton'
import { getActorUrl, getGenreUrl } from '@/configs/url.config'

export interface TypesMoviePoster {
  data: IMovie
  actor: IActor[] | undefined
  genre: IGenre[] | undefined
}

const MoviePoster: FC<TypesMoviePoster> = ({ data, actor, genre }) => {
  
  
  return (
    <div className={style.BigPoster}>
      {data && <Image src={data.bigPoster} width={1299} height={499} alt="" />}
      <div className={style.description}>
        <h1>{data.title}</h1>
        <p className={style.parameters}>
          {data.parameters?.year} · {data.parameters?.country} ·{' '}
          {data.parameters?.duration}
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
                <span >
                  {el.name}
                  {actor[idx + 1] ? ',' : ''}
                </span>
              </Link>
            )
          })}
        </p>
      </div>
      <div className={style.favorites}>
        <span><FavoriteButton movieId={data._id}/></span>
        <span><IoMdStar /><span>{data.rating}</span></span>
      </div>
    </div>
  )
}

export default MoviePoster
