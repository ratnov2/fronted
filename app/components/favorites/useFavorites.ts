import { useQuery } from 'react-query'


import { usersApi } from '@/api/dataAPI'

export const useFavorites = () => {
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => usersApi.getFavoriteFilms(), {
		select: ({ data }) => data,
	})

	return { isLoading, favoritesMovies, refetch }
}
