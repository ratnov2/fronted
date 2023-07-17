import React from 'react'
import style from '../RightSidebar.module.scss'
import Image from 'next/image'
import Rating from 'ui/rating/Rating'
import Button from 'ui/form-ui/button/Button'
import Link from 'next/link'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import MiniMovieCard from './ui/MiniMovieCard'
const PopularMovies = () => {
  const { popularMovies } = useGlobalProps()
  return (
    <div className={style.movie}>
      <h1>Popular Movies</h1>
        <>
          {popularMovies.map((el) => {
            return (
              <MiniMovieCard
              genres={el.genres}
              id={el._id}
              poster={el.poster}
              rating={el.rating}
              title={el.title} />
            )
          })}
          <Button className="mx-5 py-2 w-44">See more</Button>
        </>
    </div>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {},fallback: false }
})

export default PopularMovies
