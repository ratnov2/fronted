import Link from 'next/link'
import style from './style.module.scss'
import { FC } from 'react'
import { ImgWithLoader } from 'ui/img-with-loader/ImgWithLoader'

import { IGenre } from '@/shared/types/movie.types'
import Rating from 'ui/rating/Rating'

interface IMovieInsideSidebar {
  id: string
  poster: string
  title: string
  genres: IGenre[]
  rating: number
}

export const MovieItem: FC<IMovieInsideSidebar> = ({
  genres,
  id,
  poster,
  title,
  rating,
}) => {
  return (
    <Link href={`/movie/${id}`} className={style.item}>
      <ImgWithLoader
        img={poster}
        className="w-[60px] h-full mr-2"
        type="popular"
      />
      <div className={style.descriptionMovie}>
        <h3>{title}</h3>
        <div className={style.genres}>
          {genres.map((el) => (
            <span>{el.name}</span>
          ))}
        </div>
        <Rating rating={rating} />
      </div>
    </Link>
  )
}
