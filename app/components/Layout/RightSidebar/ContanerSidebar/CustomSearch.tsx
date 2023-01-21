import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rating from 'ui/rating/Rating'
import Search from 'ui/serch/Search'
import style from '../rightSidebar.module.scss'
import { useCustomSearch } from './useCustomSearch'
const CustomSearch = () => {
  const { allMovies, isValue, value } =
    useCustomSearch()
  return (
    <div className={style.customSearch}>
      <Search
        isValue={isValue}
        value={value}
        className1="mt-10 ml-5"
        className2="w-48 "
      />
      {value !== '' && allMovies.isSuccess && (
        <div className={style.list}>
          {allMovies.data?.length ? (
            allMovies.data?.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <Image
                  src={movie.poster || ''}
                  width={50}
                  height={50}
                  objectFit="cover"
                  objectPosition="top"
                  alt={movie.name}
                  draggable={false}
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
}

export default CustomSearch
