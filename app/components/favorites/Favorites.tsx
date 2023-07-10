import { FC } from 'react'

import { getMovieUrl } from '@/configs/url.config'

import FavoriteItem from './FavoriteItem'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'
import Heading from 'ui/heading/Heading'
import { Meta } from '@/utils/Meta'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'

const Favorites: FC = () => {
  const { favoritesMovies, isLoading } = useFavorites()

  return (
    <Meta title="Favorites">
      <Heading title={'Favorites'} />
      <section className={styles.favorites}>
        {isLoading ? (
          <SkeletonLoader
            count={3}
            className={styles.skeletonLoader}
            containerClassName={styles.containerLoader}
          />
        ) : (
          favoritesMovies?.map((movie) => (
            <FavoriteItem
              key={movie._id}
              item={{
                name: movie.title,
                posterPath: movie.bigPoster,
                url: getMovieUrl(movie.slug),
                title: movie.title,
                _id: movie._id,
              }}
            />
          ))
        )}
      </section>
    </Meta>
  )
}

export default Favorites
