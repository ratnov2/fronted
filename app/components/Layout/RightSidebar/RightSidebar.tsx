import { FC } from 'react'
import Search from 'ui/serch/Search'
import CustomSearch from './ContanerSidebar/CustomSearch'
import PopularMovies from './ContanerSidebar/PopularMovies'
import style from './rightSidebar.module.scss'
import FavoriteMovies from './ContanerSidebar/FavoritesMovies'
import { useAuthState } from '@/hooks/useAuthState'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'

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
