import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import React, { FC } from 'react'
import style from '../HomePage/home-page.module.scss'

export interface TypesSimilarMovies {
  data: IMovie[] | undefined
}

const SimilarMovies: FC<TypesSimilarMovies> = ({ data }) => {
  return (
    <div>
      <div className={style.trend}>
        <h1>Similar</h1>
        <div className={style.carousels}>
          {data?.map((el) => {
            return (
              <div key={el._id} className={style.img}>
                <Image src={el.poster} alt="" width={271} height={429} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SimilarMovies
