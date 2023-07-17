import { FC } from 'react'
import CustomSearch from './ContanerSidebar/CustomSearch'
import PopularMovies from './ContanerSidebar/PopularMovies'
import FavoriteMovies from './ContanerSidebar/FavoritesMovies'
import { useAuthState } from '@/hooks/useAuthState'

const RightSidebar: FC = () => {
  const { user } = useAuthState()
  return (
    <div>
      <CustomSearch />
      <PopularMovies />
      {user && <FavoriteMovies />}
    </div>
  )
}

export default RightSidebar
