import { IGenre, IMovie } from '@/shared/types/movie.types'
import React from 'react'
import Catalog from 'ui/catalog/Catalog'

const MoviesByGenre = ({
  moviesByGenre,
  genre,
}: {
  moviesByGenre: IMovie[]
  genre: IGenre
}) => {
  return (
    <div>
        <Catalog
          movies={moviesByGenre}
          title={genre.name}
          description={genre.name}
        />

    </div>
  )
}

export default MoviesByGenre
