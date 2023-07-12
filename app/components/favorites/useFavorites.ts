import { useQuery } from 'react-query'


import { usersApi } from '@/api/dataAPI'
import { useAuthState } from '@/hooks/useAuthState'

export const useFavorites = () => {
	const {user} = useAuthState()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => usersApi.getFavoriteFilms(), {
		select: ({ data }) => data,
		enabled:!!user
	})

	return { isLoading, favoritesMovies, refetch }
}
