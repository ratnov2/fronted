import { movieApi } from '@/api/dataAPI'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useSliderEffect = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const { popularMovies } = useGlobalProps()
  //const popularMovies = useQuery('getPopularMovies',()=>movieApi.mostPopular())
  const [slideIn, setSlideIn] = useState(false)

  const popularMoviesConverted =
    popularMovies !== undefined
      ? popularMovies.map((el) => ({
          id: el._id,
          bigPoster: el.bigPoster,
          genres: el.genres,
          title: el.title,
        }))
      : []
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
