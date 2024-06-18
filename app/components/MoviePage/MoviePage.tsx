import React from 'react'
import Gallery from 'ui/gallery/Gallery'
import Page404 from '../../../pages/404'

import MoviePoster from './MoviePoster'
import RatingMovie from './RatingMovie'
import { useMoviesPage } from '../../ui/video-player/useMoviePage'
import VideoPlayer from 'ui/video-player/VideoPlayer'
import Skeleton from 'react-loading-skeleton'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import { IframeWithLoader } from './IframeWithLoader'

const MoviePage = () => {
  const { movie, ActorState, GenreState, movieByGenre } = useMoviesPage()
  return (
    <div>
      <>
        <MoviePoster actor={ActorState} genre={GenreState} />
        {/* <VideoPlayer
            videoSource={movie.data.data.videoUrl}
            slug={movie.data.data.slug}
          /> */}
        <IframeWithLoader className="h-[400px] w-full mt-12" />
        {movieByGenre.data && <Gallery items={movieByGenre.data} />}
        {movie.data?.data && (
          <RatingMovie
            movieRating={movie.data.data.rating}
            _id={movie.data.data._id}
          />
        )}
      </>
    </div>
  )
}

export default MoviePage
