import { genresApi, movieApi } from '@/api/dataAPI'
import { IGenre, IMovie } from '@/shared/types/movie.types'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import Catalog from 'ui/catalog/Catalog'

const MoviesByGenre = ({
  moviesByGenre,
  genre,
}: {
  moviesByGenre: IMovie[]
  genre: IGenre
}) => {
  const { query } = useRouter()

  // const movies = useMutation('getByMovie', (genre: string) =>
  //   movieApi.getByGenres(genre)
  // )
  // const genre = useQuery(
  //   'getByGenreSlug',
  //   () => genresApi.getBySlug(String(query.slug)),
  //   {
  //     enabled: !!query.slug,
  //     onSuccess: (genre) => movies.mutate(genre.data._id),
  //   }
  // )

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
