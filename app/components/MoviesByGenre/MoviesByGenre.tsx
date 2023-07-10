import { genresApi, movieApi } from '@/api/dataAPI'
import { IMovie } from '@/shared/types/movie.types'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import Catalog from 'ui/catalog/Catalog'


const MoviesByGenre = () => {

  const {query} = useRouter()

  const movies = useMutation('getByMovie',(genre:string)=>movieApi.getByGenres(genre))
  const genre = useQuery('getByGenreSlug',()=>genresApi.getBySlug(String(query.slug)),{
    enabled:(!!query.slug),
    onSuccess:(genre)=>movies.mutate(genre.data._id),
  })

  useEffect(()=>{
    if(genre.isSuccess) genre.refetch()
  },[query])

  return (
    <div>
      {movies.data && genre.data && <Catalog
			movies={movies.data.data}
			title={genre.data?.data.name}
			description={genre.data?.data.name}
		/>}
    </div>
  )
}

export default MoviesByGenre