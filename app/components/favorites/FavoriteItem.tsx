import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Favorites.module.scss'
import { IFavoriteItem } from './favorites.interface'
import FavoriteButton from 'ui/favorite-button/FavoriteButton'
import { useQuery } from 'react-query'
import { usersApi } from '@/api/dataAPI'
import { useFavorites } from './useFavorites'

const FavoriteItem: FC<{ item: IFavoriteItem }> = ({ item }) => {
  const { favoritesMovies } = useFavorites()
  return (
    <div className={styles.itemWrapper}>
      {!!favoritesMovies && (
        <FavoriteButton favoritesMovies={favoritesMovies} movieId={item._id} />
      )}
      <Link href={item.url}>
        <a className={styles.item}>
          <Image
            alt={item.name}
            src={item.posterPath}
            layout="fill"
            draggable={false}
            priority
          />

          <div className={styles.title}>{item.title}</div>
        </a>
      </Link>
    </div>
  )
}

export default FavoriteItem
