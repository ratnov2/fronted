import React from 'react'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import { useReqRightSidebar } from './useReqRightSidebar'
import style from '../rightSidebar.module.scss'
import Image from 'next/image'
import Rating from 'ui/rating/Rating'
import Button from 'ui/form-ui/button/Button'
import Link from 'next/link'
import { useFavorites } from '@/components/favorites/useFavorites'
import { MovieItem } from './MovieItem/MoviesInsideSidebar'
const FavoriteMovies = () => {
  const { favoritesMovies, isLoading } = useFavorites()
  return (
    <div className={style.movie}>
      <h1>Favorite Movies</h1>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        favoritesMovies && (
          <>
            {favoritesMovies.map((el) => {
              return (
                <MovieItem
                  genres={el.genres}
                  id={el._id}
                  poster={el.poster}
                  rating={el.rating}
                  title={el.title}
                />
              )
            })}
            <Button className="mx-5 py-2 w-44">See more</Button>
          </>
        )
      )}
    </div>
  )
}

export default FavoriteMovies
