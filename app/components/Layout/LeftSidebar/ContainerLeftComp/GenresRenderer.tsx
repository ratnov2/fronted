import Link from 'next/link'
import React, { FC } from 'react'
import { IGenres } from '../menu.interface'
import style from '../leftSidebar.module.scss'
import MaterialIcon from 'ui/MaterialIcon'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'

const GenresRenderer: FC<any> = ({ data }) => {
  const { asPath } = useRouter()
  const url = asPath.replace('/genre/', '')

  return (
    <div className={style.menuStyle}>
      <h3>Genres</h3>
      {data ? (
        data.map((element: IGenres) => {
          return (
            <Link
              key={element.name}
              href={`/genre/${element.slug}`}
              className={cn(url === element.slug && style.active)}
            >
              <figure className={style.figureMenu}>
                <MaterialIcon name={element.icon} />
                <p>{element.name}</p>
              </figure>
            </Link>
          )
        })
      ) : (
        <SkeletonLoader count={4} className="h-6" />
      )}
    </div>
  )
}

export default GenresRenderer
