import React, { FC, useRef, useState } from 'react'
import Gallery from 'ui/gallery/Gallery'
import style from './home-page.module.scss'
import { useHomePageConvertedActorAndMovies } from './useHomePageConvertedActorAndMovies'
import Slider from 'ui/slider/Slider'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'

const HomePage = () => {
  const { popularActorsConverted, popularMoviesConverted } =
    useHomePageConvertedActorAndMovies()
  const props= useGlobalProps()
  console.log(props);
  
  return (
    <div className="animate-fade">
      <Slider />
      <div className={style.galleryBlock}>
        <h1>Trending Now</h1>
        {popularMoviesConverted.length !== 0 && (
          <Gallery items={popularMoviesConverted} />
        )}
      </div>
      <div className={style.galleryBlock}>
        <h1>Best Actors</h1>
        {popularActorsConverted.length !== 0 && (
          <Gallery items={popularActorsConverted} />
        )}
      </div>
    </div>
  )
}

export default HomePage
