import React from 'react'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import style from '../rightSidebar.module.scss'
import Image from 'next/image'
import Rating from 'ui/rating/Rating'
import Button from 'ui/form-ui/button/Button'
import Link from 'next/link'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import { ImgWithLoader } from 'ui/img-with-loader/ImgWithLoader'
import { MovieItem } from './MovieItem/MoviesInsideSidebar'
const PopularMovies = () => {
  const { popularMovies } = useGlobalProps()

  return (
    <div className={style.movie}>
      <h1>Popular Movies</h1>
      {popularMovies && (
        <>
          {popularMovies.map((el) => {
            return (
              <MovieItem
                genres={el.genres}
                id={el._id}
                poster={el.poster}
                rating={el.rating}
                title={el.title}
                key={el._id}
              />
            )
          })}
          <Link href="/trendMovies">
            <Button className="mx-5 py-2 w-44">See more</Button>
          </Link>
        </>
      )}
    </div>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})
export default PopularMovies
