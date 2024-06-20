import { usersApi } from '@/api/dataAPI'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useFavorites } from '../../components/favorites/useFavorites'

import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'
import { IMovieFavorite } from '@/shared/types/movie.types'

const FavoriteButton: FC<{
  favoritesMovies: IMovieFavorite[]
  movieId: string
}> = ({ movieId, favoritesMovies }) => {
  const [isSmashed, setIsSmashed] = useState(
    favoritesMovies.some((f) => f._id === movieId)
  )
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    'toggle_faforite_film',
    () => usersApi.toggleFavoriteFilm(movieId),
    {
      onSuccess(data) {
        queryClient.invalidateQueries('favorite_movies')
      },
    }
  )

  return (
    <button
      onClick={() => {
        setIsSmashed(!isSmashed)
        mutate()
      }}
      className={cn(styles.button, {
        [styles.animate]: isSmashed,
      })}
      style={{ backgroundImage: `url(${HeartImage.src})` }}
    />
  )
}

export default FavoriteButton
