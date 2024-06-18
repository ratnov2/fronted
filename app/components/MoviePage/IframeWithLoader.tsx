import { FC, useState } from 'react'
import style from './iframe-with-loader.module.scss'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { movieApi } from '@/api/dataAPI'

interface IIframeWithLoader {
  className?: string
}

export const IframeWithLoader: FC<IIframeWithLoader> = ({ className = '' }) => {
  const { query } = useRouter()

  const movie = useQuery(
    [String(query.movie)],
    () => movieApi.getById(String(query.movie)),
    {
      enabled: !!query.movie,
    }
  )
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={`${className}`}>
      {movie.data?.data && (
        <div className={`${style.wrapper} ${!isLoading && style.loaded}`}>
          <iframe
            style={
              isLoading
                ? { visibility: 'hidden', height: 0, width: 0 }
                : { height: '100%', width: '100%' }
            }
            src={movie.data?.data.videoUrl}
            title="YouTube video player"
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {isLoading && <SkeletonLoader className="h-full w-full" />}
    </div>
  )
}
