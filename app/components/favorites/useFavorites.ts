import { useQuery } from 'react-query'

import { usersApi } from '@/api/dataAPI'
import { useAuthState } from '@/hooks/useAuthState'

export const useFavorites = () => {
  const { user } = useAuthState()
  const {
    isLoading,
    data: favoritesMovies,
    refetch,
  } = useQuery('favorite_movies', (e) => usersApi.getFavoriteFilms(), {
    select: ({ data }) => data,
    enabled: !!user,
    staleTime: 1000 * 60 * 5, // 5 минут
    cacheTime: 1000 * 60 * 10, // 10 минут
  })

  return { isLoading, favoritesMovies, refetch }
}
