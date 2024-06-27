import Image from 'next/image'
import { FC, useState } from 'react'
import style from './style.module.scss'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'

interface IImgWithLoader {
  img?: string
  className: string
  type?: 'ordinary' | 'popular' | 'slider'
}

const styleSlider = {
  slider: style.slider,
}

export const ImgWithLoader: FC<IImgWithLoader> = ({
  img,
  className,
  type = 'ordinary',
}) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={`${className} aspect-[16/9] `}>
      {img && (
        <div
          className={`${style.imageWrapper} ${!isLoading && style.loaded} ${
            style[type]
          }`}
        >
          <Image
            src={img}
            width={1399}
            height={499}
            onLoadingComplete={() => setIsLoading(false)}
            style={
              isLoading
                ? { visibility: 'hidden', height: 0, width: 0 }
                : { height: '100%', width: '100%', objectFit: 'cover' }
            }
            alt=""
          />
          {type !== 'popular' && (
            <div
              className={`${style.share} ${
                styleSlider[type as 'slider'] || ''
              }`}
            />
          )}
        </div>
      )}

      {isLoading && <SkeletonLoader className="h-full w-full" />}
    </div>
  )
}
