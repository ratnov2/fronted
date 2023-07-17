import React from 'react'
import style from '../rightSidebar.module.scss'
import Image from 'next/image'
import Rating from 'ui/rating/Rating'
import Button from 'ui/form-ui/button/Button'
import Link from 'next/link'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
const PopularMovies = () => {
  const { popularMovies } = useGlobalProps()
  console.log('123',popularMovies)
  return (
    <div className={style.movie}>
      <h1>Popular Movies</h1>
        <>
          {popularMovies.map((el) => {
            return (
              <Link
                href={`/movie/${el._id}`}
                className={style.item}
                key={el._id}
              >
                <Image width={60} height={150} alt="" src={el.poster} />
                <div>
                  <span>
                    <h3>{el.title}</h3>
                    <div className={style.genres}>
                      {el.genres.map((el) => (
                        <span>{el.name}</span>
                      ))}
                    </div>
                  </span>
                  <Rating rating={el.rating} />
                </div>
              </Link>
            )
          })}
          <Button className="mx-5 py-2 w-44">See more</Button>
        </>
    </div>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})

export default PopularMovies
