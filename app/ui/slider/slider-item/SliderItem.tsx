import { getGenreUrl } from '@/configs/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import Button from 'ui/form-ui/button/Button'
import { ISliderItem } from './slider-item.interface'
import style from './SliderItem.module.scss'
import { ImgWithLoader } from 'ui/img-with-loader/ImgWithLoader'

const SliderItem: FC<ISliderItem> = ({ movie, currentImg }) => {
  const { push } = useRouter()
  return (
    <div className={style.sliderItem}>
      <ImgWithLoader
        img={currentImg}
        className="h-[400px] w-full"
        type="slider"
      />
      <div className={style.description}>
        <p>{movie.title}</p>
        <span className={style.genres}>
          {movie.genres.length ? (
            movie.genres.map((el, idx) => {
              return (
                <Link key={el._id} href={getGenreUrl(el.slug)}>
                  <span>
                    {el.name}
                    {movie.genres[idx + 1] ? ',' : ''}
                  </span>
                </Link>
              )
            })
          ) : (
            <span>Not a Genre</span>
          )}
        </span>
        <Button
          className={style.watch}
          onClick={() => push(`movie/${movie.id}` || '')}
        >
          Watch
        </Button>
      </div>
    </div>
  )
}

export default SliderItem
