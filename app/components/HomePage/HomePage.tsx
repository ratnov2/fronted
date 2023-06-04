import { actorsApi, genresApi, movieApi } from '@/api/dataAPI'
import { getActorUrl, getMovieUrl } from '@/configs/url.config'
import React from 'react'
import { useQuery } from 'react-query'
import Gallery from 'ui/gallery/Gallery'
import Slider from 'ui/slider/Slider'

import style from './home-page.module.scss'

const HomePage = () => {
  const trend = useQuery('getTrendMovie', () => movieApi.mostPopular(), {
    select: ({ data }) =>
      data.map((el) => ({
        posterPath: el.poster,
        name: el.title,
        url: getMovieUrl(el._id),
      })),
  })
  const actors = useQuery('getAllActors', () => actorsApi.getAll(), {
    select: ({ data }) =>
      data.map((el) => ({
        posterPath: el.photo,
        name: el.name,
        url: getActorUrl(el._id),
      })),
  })

  return (
    <div className="animate-fade">
      <Slider />
      <div className={style.galleryBlock}>
        <h1>Trending Now</h1>
        {trend.data && <Gallery items={trend.data} />}
      </div>
      <div className={style.galleryBlock}>
        <h1>Best Actors</h1>
        {actors.data && <Gallery items={actors.data} />}
      </div>
    </div>
  )
}

export default HomePage
