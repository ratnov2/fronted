import React, { Fragment } from 'react'
import Gallery from 'ui/gallery/Gallery'
import MoviePoster from './MoviePoster'
import RatingMovie from './RatingMovie'
import { useMoviesPage } from '../../ui/video-player/useMoviePage'
import { IframeWithLoader } from './IframeWithLoader'
import { useAuthState } from '@/hooks/useAuthState'
import Button from 'ui/form-ui/button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MoviePage = () => {
  const { query, asPath } = useRouter()
  const { movie, ActorState, GenreState, movieByGenre } = useMoviesPage()
  const { user } = useAuthState()

  return (
    <Fragment key={String(query.movie)}>
      <MoviePoster actor={ActorState} genre={GenreState} />
      {/* <VideoPlayer
            videoSource={movie.data.data.videoUrl}
            slug={movie.data.data.slug}
          /> */}
      {user ? (
        <IframeWithLoader className="w-full h-auto mt-12 min-w-[300px]" />
      ) : (
        <div className="mt-12 text-center">
          <p className="text-center text-2lg">
            To watch the video, you need to log in
          </p>
          <Link href={`/auth?redirect=${asPath}`}>
            <Button className="font-bold">Log in</Button>
          </Link>
        </div>
      )}
      {movieByGenre.data && movieByGenre.data.length > 0 && (
        <>
          <h2 className="text-2lg mt-6">Related videos</h2>
          <Gallery items={movieByGenre.data} />
        </>
      )}
      {user && movie.data?.data && (
        <RatingMovie
          movieRating={movie.data.data.rating}
          _id={movie.data.data._id}
        />
      )}
    </Fragment>
  )
}

export default MoviePage
