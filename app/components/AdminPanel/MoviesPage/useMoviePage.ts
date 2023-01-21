import { movieApi } from '@/api/dataAPI'
import { useDebounce } from '@/hooks/useDebounse'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useMoviesPage = () => {
  const { push } = useRouter()

  const [isSearching, setIsSearching] = useState(true)
  const [value, isValue] = useState('')

  const debouncedSearchTerm = useDebounce(value, 500)

  const createMovie = useMutation('createMovie', () => movieApi.create(), {
    onSuccess: (data) => push(`movie/edit/${data.data}`),
  })

  const allMovies = useQuery(
    'getAllMovies',
    () => movieApi.getAllMovies(value),
    {
      select: ({ data }) =>
        data.map((el) => ({
          _id: el._id,
          item: [
            el.title,
            //@ts-ignore
            String(...el.genres.map((el2) => el2.name)),
            String(el.rating),
          ],
        })),
      enabled: isSearching,
      onSuccess: () => setIsSearching(false),
    }
  )

  const movieDel = useMutation(
    'deleteMovie',
    (_id: string) => movieApi.delete(_id),
    {
      onSuccess: () => allMovies.refetch(),
    }
  )

  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === '') {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }, [debouncedSearchTerm])

  const createHandler = () => createMovie.mutate()
  const deleteHandler = (_id:string) => movieDel.mutate(_id) 

  return { deleteHandler, allMovies, isValue, value, createHandler }
}
