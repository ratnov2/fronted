import React from 'react'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import { useReqRightSidebar } from './useReqRightSidebar'
import style from '../rightSidebar.module.scss'
import Image from 'next/image'
import Rating from 'ui/rating/Rating'
import Button from 'ui/form-ui/button/Button'
import Link from 'next/link'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import { ImgWithLoader } from 'ui/img-with-loader/ImgWithLoader'
const PopularMovies = () => {
  const { popularMovies } = useGlobalProps()
  return (
    <div className={style.movie}>
      <h1>Popular Movies</h1>
      {popularMovies && (
        <>
          {popularMovies.map((el) => {
            return (
              <div
                // href={`/movie/${el._id}`}
                className={style.item}
                key={el._id}
              >
                <ImgWithLoader
                  img={el.poster}
                  className="w-[60px] h-full mr-2"
                  type="popular"
                />
                <div className={style.descriptionMovie}>
                  <h3>{el.title}</h3>
                  <div className={style.genres}>
                    {el.genres.map((el) => (
                      <span>{el.name}</span>
                    ))}
                  </div>
                  <Rating rating={el.rating} />
                </div>
              </div>
            )
          })}
          <Button className="mx-5 py-2 w-44">See more</Button>
        </>
      )}
    </div>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})
export default PopularMovies
