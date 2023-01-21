import { movieApi } from '@/api/dataAPI'
import React from 'react'
import { useQuery } from 'react-query'
import Catalog from 'ui/catalog/Catalog'

const FreshMoviesPage = () => {
  const movies = useQuery('getAllMovies', () => movieApi.getAllMovies())
  
  return (
    <div>
      {movies.data?.data && <Catalog
			movies={movies.data.data || []}
			title="Fresh movies"
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>}
    </div>
  )
}

export default FreshMoviesPage
