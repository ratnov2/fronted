import { movieApi } from '@/api/dataAPI'
import { IMovie } from '@/shared/types/movie.types'
import React from 'react'
import { useQuery } from 'react-query'
import Catalog from 'ui/catalog/Catalog'


const TrendingNowPage = () => {
  const movies = useQuery('getPopularMovies', () => movieApi.mostPopular())

  return (
    <div>
      {movies.data?.data && (
        <Catalog
          movies={movies.data.data || []}
          title="Trending movies"
          description="New movies and series in excellent quality: legal, safe, without ads"
        />
      )}
    </div>
  )
}

export default TrendingNowPage
