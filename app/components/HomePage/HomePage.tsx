import { actorsApi, genresApi, movieApi } from '@/api/dataAPI'
import { getActorUrl, getMovieUrl } from '@/configs/url.config'
import { IMoviePopular } from '@/shared/types/movie.types'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import Gallery from 'ui/gallery/Gallery'
import Slider from 'ui/slider/Slider'

import style from './home-page.module.scss'
import { useHomePageConvertedActorAndMovies } from './useHomePageConvertedActorAndMovies'

const HomePage: FC<any> = () => {
  const { actors, popularMovies } = useGlobalProps()
  const { popularActorsConverted, popularMoviesConverted } =
  useHomePageConvertedActorAndMovies()

  return (
    <div className="animate-fade">
      <Slider />
      <div className={style.galleryBlock}>
        <h1>Trending Now</h1>
        <Gallery items={popularMoviesConverted} />
        {/* {trend.data && <Gallery items={trend.data} />} */}
      </div>
      <div className={style.galleryBlock}>
        <h1>Best Actors</h1>
        {actors.length && <Gallery items={actors as any} />}
      </div>
    </div>
  )
}
export default HomePage
