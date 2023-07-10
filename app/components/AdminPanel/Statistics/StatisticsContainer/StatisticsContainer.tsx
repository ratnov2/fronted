import { getMovieUrl } from '@/configs/url.config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import style from './statistics.module.scss'
import { useStatistics } from './useStatistics'
import cn from 'classnames'
const StatisticsContainer = () => {
  const { countUsers, moviePopular } = useStatistics()

  return (
    <div className={cn(style.statistic, 'animate-fade')}>
      <div className={style.count}>
        <h1>
          {!countUsers.isLoading ? (
            countUsers.data
          ) : (
            <SkeletonLoader count={1} height={40} width={50} />
          )}
        </h1>
        <p>users</p>
      </div>

      <div className={style.mostPopular}>
        <h1>The most Popular Movie</h1>
        {!moviePopular.isLoading ? (
          moviePopular.data && (
            <>
              <p>Opened {moviePopular.data.countOpened} times</p>
              <Link href={getMovieUrl(moviePopular.data.slug)}>
                <Image
                  loader={() => `${moviePopular.data.bigPoster}`}
                  src={`${moviePopular.data.bigPoster}`}
                  alt=""
                  width={429}
                  height={279}
                />
              </Link>
            </>
          )
        ) : (
          <SkeletonLoader height={110} />
        )}
      </div>
    </div>
  )
}

export default StatisticsContainer
