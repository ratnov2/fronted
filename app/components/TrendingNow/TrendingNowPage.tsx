import { movieApi } from '@/api/dataAPI'
import { IMovie } from '@/shared/types/movie.types'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import React from 'react'
import { useQuery } from 'react-query'
import Catalog from 'ui/catalog/Catalog'

const TrendingNowPage = () => {
  const { popularMovies } = useGlobalProps()
  return (
    <div>
      <Catalog
        movies={popularMovies }
        title="Trending movies"
        description="New movies and series in excellent quality: legal, safe, without ads"
      />
    </div>
  )
}

export default TrendingNowPage
