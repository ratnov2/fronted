import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'
import Rating from 'ui/rating/Rating'
import Search from 'ui/serch/Search'
import style from '../rightSidebar.module.scss'
import { useCustomSearch } from './useCustomSearch'
import { ImgWithLoader } from 'ui/img-with-loader/ImgWithLoader'
const CustomSearch = memo(() => {
  const { allMovies, isValue, value } = useCustomSearch()

  return (
    <div className={style.customSearch}>
      <Search
        isValue={isValue}
        value={value}
        className1="mt-10 ml-5"
        className2="w-48 "
      />

      {value !== '' && !allMovies.isLoading && allMovies.isSuccess && (
        <div className={style.list}>
          {allMovies.data?.length ? (
            allMovies.data?.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <ImgWithLoader
                  img={movie.poster}
                  className="w-[60px] h-[60px] mr-2 flex-shrink-0"
                  type="popular"
                />
                <span>{movie.name}</span>
              </Link>
            ))
          ) : (
            <div className="text-white text-center my-4">Movies not found!</div>
          )}
        </div>
      )}
    </div>
  )
})

export default CustomSearch
