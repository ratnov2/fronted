import { movieApi } from '@/api/dataAPI'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import React from 'react'
import { useQuery } from 'react-query'
import Catalog from 'ui/catalog/Catalog'

const FreshMoviesPage = () => {
  const { allMovies } = useGlobalProps()

  return (
    <div>
      <Catalog
        movies={allMovies}
        title="Fresh movies"
        description="New movies and series in excellent quality: legal, safe, without ads"
      />
    </div>
  )
}

export default FreshMoviesPage
