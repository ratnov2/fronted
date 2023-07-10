import { genresApi, movieApi } from '@/api/dataAPI'
import { useDebounce } from '@/hooks/useDebounse'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useGenresPage = () => {
  const { push } = useRouter()

  const [isSearching, setIsSearching] = useState(true)
  const [value, isValue] = useState('')

  const debouncedSearchTerm = useDebounce(value, 500)

  const createGenre = useMutation('createGenre', () => genresApi.create(), {
    onSuccess: (data) => push(`genre/edit/${data.data}`),
  })

  const allGenres = useQuery(
    'getAllGenres',
    () => genresApi.getAll(value),
    {
      select: ({ data }) =>
        data.map((el) => ({
          _id: el._id,
          item: [
            el.name,
            el.slug
          ],
        })),
      enabled: isSearching,
      onSuccess: () => setIsSearching(false),
    }
  )

  const genreDel = useMutation(
    'deleteGenre',
    (_id: string) => genresApi.delete(_id),
    {
      onSuccess: () => allGenres.refetch(),
    }
  )

  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === '') {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }, [debouncedSearchTerm])

  const createHandler = () => createGenre.mutate()
  const deleteHandler = (_id:string) => genreDel.mutate(_id) 

  return { deleteHandler, allGenres, isValue, value, createHandler }
}
