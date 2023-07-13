import { movieApi } from '@/api/dataAPI'
import { IGenre, IMoviePopular } from '@/shared/types/movie.types'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const useSliderEffect = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  // const { popularMovies } = useGlobalProps()
  const [popularMoviesConverted, setMovie] = useState<
    | { id: string; bigPoster: string; genres: IGenre[]; title: string }[]
    | undefined
  >()
  const popularMovies = useQuery('getPopularMovies', () =>
    movieApi.mostPopular()
  )
  const [slideIn, setSlideIn] = useState(false)
  useEffect(() => {
    if (popularMovies.data?.data.length !== 0) {
      const popularMovie =
        popularMovies.data?.data !== undefined
          ? popularMovies.data.data.map((el) => ({
              id: el._id,
              bigPoster: el.bigPoster,
              genres: el.genres,
              title: el.title,
            }))
          : undefined
          setMovie(popularMovie)
    }
  }, [popularMovies.data])
  // const popularMoviesConverted =
  //   popularMovies.data?.data !== undefined
  //     ? popularMovies.data.data.map((el) => ({
  //         id: el._id,
  //         bigPoster: el.bigPoster,
  //         genres: el.genres,
  //         title: el.title,
  //       }))
  //     : []
  const nextIndex = () => {
    if (currentIdx === 2) return setCurrentIdx(0)
    return setCurrentIdx(currentIdx + 1)
  }
  const prevIndex = () => {
    if (currentIdx === 0) return setCurrentIdx(2)
    return setCurrentIdx(currentIdx - 1)
  }

  const handleClick = (direction: 'left' | 'right') => {
    setSlideIn(true)
    setTimeout(() => {
      setSlideIn(false)
      if (direction === 'left') prevIndex()
      else nextIndex()
    }, 300)
  }

  return {
    handleClick,
    popularMoviesConverted,
    currentIdx,
    slideIn,
  }
}
export default useSliderEffect
