import React from 'react'
import Catalog from 'ui/catalog/Catalog'
import { useFavorites } from '../favorites/useFavorites'

const Favorite = () => {
  const { favoritesMovies } = useFavorites()
  return (
    <>
      {favoritesMovies && (
        <Catalog
          movies={favoritesMovies}
          title="Trending movies"
          description="New movies and series in excellent quality: legal, safe, without ads"
        />
      )}
    </>
  )
}

export default Favorite
