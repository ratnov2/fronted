import { movieApi } from '@/api/dataAPI'
import { IGenre } from '@/shared/types/movie.types'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useSliderEffect = () => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const nextIndex = () => {
    if (currentIdx === 2) return setCurrentIdx(0)
    return setCurrentIdx(currentIdx + 1)
  }
  const prevIndex = () => {
    if (currentIdx === 0) return setCurrentIdx(2)
    return setCurrentIdx(currentIdx - 1)
  }

  const movie = useQuery('getMovies', () => movieApi.mostPopular(), {
    select: ({ data }) =>
      data.map((el) => ({
        _id: el._id,
        bigPoster: el.bigPoster,
        genres: el.genres,
        title: el.title,
      })),
  })

  const [currentImg, setCurrentImg] = useState<string | undefined>(
    movie.data?.[0].bigPoster
  )

  const [dataMovie, setDataMovie] = useState<
    | {
        _id: string
        bigPoster: string
        genres: IGenre[]
        title: string
      }[]
    | undefined
  >(movie.data)

  return {
    nextIndex,
    prevIndex,
    currentImg,
    setCurrentImg,
    dataMovie,
    setDataMovie,
    movie,
    currentIdx,
  }
}
