import { movieApi } from '@/api/dataAPI'
import { useDebounce } from '@/hooks/useDebounse'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useCustomSearch = () => {
  
  const [value, isValue] = useState('')

  const debouncedSearchTerm = useDebounce(value, 500)

  const allMovies = useQuery(
    'getAllPopularMovies',
    () => movieApi.getAllMovies(value),
    {
      select: ({ data }) =>
        data.map((el) => ({
          id: el._id,
          name: el.title,
          genres: String(...el.genres.map((el2: any) => el2.name)),
          rating: el.rating,
          poster: el.poster,
        })),
      enabled: value === debouncedSearchTerm && value !== '',
    }
  )

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     setIsSearching(true)
  //   } else {
  //     setIsSearching(false)
  //   }
  // }, [debouncedSearchTerm])

  return { allMovies, isValue, value, debouncedSearchTerm }
}
