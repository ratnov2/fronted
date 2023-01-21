import React from 'react'
import Gallery from 'ui/gallery/Gallery'
import Page404 from '../../../pages/404'

import MoviePoster from './MoviePoster'
import RatingMovie from './RatingMovie'
import { useMoviesPage } from '../../ui/video-player/useMoviePage'
import VideoPlayer from 'ui/video-player/VideoPlayer'


const MoviePage = () => {
  const { movie, ActorState, GenreState, movieByGenre } = useMoviesPage()

  return (
    <div>
      {movie.data ? (
        <>
          <MoviePoster
            data={movie.data.data}
            actor={ActorState}
            genre={GenreState}
          />
          <VideoPlayer
            videoSource={movie.data.data.videoUrl}
            slug={movie.data.data.slug}
          />
          {movieByGenre.data && <Gallery items={movieByGenre.data} />}
          <RatingMovie
            movieRating={movie.data.data.rating}
            _id={movie.data.data._id}
          />
        </>
      ) : (
        <Page404 />
      )}
    </div>
  )
}

export default MoviePage
