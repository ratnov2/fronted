import { getActorUrl, getMovieUrl } from '@/configs/url.config'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'

export const useHomePageConvertedActorAndMovies = () => {
  const { actors, popularMovies } = useGlobalProps()
  console.log(actors)
  const popularMoviesConverted = popularMovies.map((el) => ({
    posterPath: el.poster,
    name: el.title,
    url: getMovieUrl(el._id),
  }))
  const popularActorsConverted = actors.map((el) => ({
    posterPath: el.photo,
    name: el.name,
    url: getActorUrl(el._id),
    content:{
      title:el.name,
      subTitle:String(el.countMovies)
    }
  }))

  return { popularMoviesConverted, popularActorsConverted }
}
