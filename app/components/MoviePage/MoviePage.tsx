import React from 'react'
import Gallery from 'ui/gallery/Gallery'
import Page404 from '../../../pages/404'

import MoviePoster from './MoviePoster'
import RatingMovie from './RatingMovie'
import { useMoviesPage } from '../../ui/video-player/useMoviePage'

const MoviePage = () => {
  const { movie, ActorState, GenreState, movieByGenre } = useMoviesPage()
  if (movie.isLoading) {
    return <h1>loading</h1>
  }
  return (
    <div>
      {movie.data ? (
        <>
          <MoviePoster
            data={movie.data.data}
            actor={ActorState}
            genre={GenreState}
          />
          {/* <VideoPlayer
            videoSource={movie.data.data.videoUrl}
            slug={movie.data.data.slug}
          /> */}
          <iframe
            width="100%"
            height="400px"
            src={movie.data.data.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ marginTop: '20px' }}
          ></iframe>
          {movieByGenre.data && (
            <>
              <h1 className="mt-6 text-2xl font-bold">Смотрите также</h1>
              <Gallery items={movieByGenre.data} />
            </>
          )}
          <RatingMovie
            movieRating={movie.data.data.rating}
            _id={movie.data.data._id}
          />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}

export default MoviePage
