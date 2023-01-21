import React from 'react'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import { useReqRightSidebar } from './useReqRightSidebar'
import style from '../rightSidebar.module.scss'
import Image from 'next/image'
import Rating from 'ui/rating/Rating'
import Button from 'ui/form-ui/button/Button'
import Link from 'next/link'
const PopularMovies = () => {
  const { popularMovies } = useReqRightSidebar()

  return (
    <div className={style.movie}>
      <h1>Popular Movies</h1>
      {popularMovies.isLoading ? (
        <SkeletonLoader />
      ) : (
        popularMovies.data &&
        popularMovies.data.map((el) => {
          return (
            <Link href={`/movie/${el.id}`} className={style.item} key={el.id}>
              <Image width={60} height={150} alt="" src={el.poster} />
              <div>
                <span>
                  <h3>{el.name}</h3>
                  <p>{el.genres}</p>
                </span>
                <Rating rating={el.rating} />
              </div>
            </Link>
          )
        })
      )}
      <Button className='mx-5 py-2 w-44' >See more</Button>
    </div>
  )
}

export default PopularMovies
