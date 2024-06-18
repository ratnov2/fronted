import Image from 'next/image'
import { FC, useState } from 'react'
import style from './style.module.scss'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import cl from 'classnames'

interface IImgWithLoader {
  img?: string
  className: string
  type?: 'ordinary' | 'popular'
}

export const ImgWithLoader: FC<IImgWithLoader> = ({
  img,
  className,
  type = 'ordinary',
}) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={className}>
      {img && (
        <div className={`${style.imageWrapper} ${!isLoading && style.loaded}`}>
          <Image
            src={img}
            width={1399}
            height={499}
            onLoadingComplete={() => setIsLoading(false)}
            style={
              isLoading
                ? { visibility: 'hidden', height: 0, width: 0 }
                : { height: '100%', width: '100%' }
            }
           
            alt=""
          />
          {type === 'ordinary' && <div className={style.share} />}
        </div>
      )}

      {isLoading && <SkeletonLoader className="h-full w-full" />}
    </div>
  )
}
