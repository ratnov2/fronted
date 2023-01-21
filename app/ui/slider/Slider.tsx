import { getGenreUrl } from '@/configs/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Button from 'ui/form-ui/button/Button'
import MaterialIcon from 'ui/MaterialIcon'
import style from './slider.module.scss'
import { useSliderEffect } from './useSliderEffect'

const Slider = () => {
  const { push } = useRouter()
  const {
    nextIndex,
    prevIndex,
    currentImg,
    dataMovie,
    setCurrentImg,
    setDataMovie,
    movie,
    currentIdx,
  } = useSliderEffect()

  useEffect(() => {
    if (movie.data) {
      const data = movie.data.slice(0, 3)
      setDataMovie(data)
      setCurrentImg(data[currentIdx].bigPoster)
    }
  }, [movie.data])

  useEffect(() => {
    setCurrentImg(dataMovie?.[currentIdx].bigPoster)
  }, [currentIdx])

  return (
    <>
      {dataMovie && currentImg && (
        <div className={style.slider}>
          {<Image src={currentImg} width={1231} height={399} alt="" />}
          <div className={style.description}>
            <p>{dataMovie[currentIdx].title}</p>
            <span className={style.genres}>
              {dataMovie[currentIdx].genres.length ? (
                dataMovie[currentIdx].genres.map((el, idx) => {
                  return (
                    <Link key={el._id} href={getGenreUrl(el.slug)}>
                      <span>
                        {el.name}
                        {dataMovie[currentIdx].genres[idx + 1] ? ',' : ''}
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
              onClick={() => push(`movie/${dataMovie[currentIdx]._id}` || '')}
            >
              Watch
            </Button>
          </div>
          <div className={style.buttonGroup}>
            <button onClick={() => prevIndex()}>
              <MaterialIcon name="MdArrowBackIos" />
            </button>
            <button onClick={() => nextIndex()}>
              <MaterialIcon name="MdArrowForwardIos" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Slider
