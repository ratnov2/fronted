import { BASE_URL } from '@/api/api'
import { actorsApi, genresApi, movieApi, usersApi } from '@/api/dataAPI'
import {
  IActor,
  IGenre,
  IMovieFavorite,
  IMoviePopular,
} from '@/shared/types/movie.types'
import {
  GlobalPropsContextProvider,
  useGlobalProps,
} from './contexts/GlobalPropsContext'
import { extractGlobalProps } from './lib/extractGlobalProps'
import { getStaticPropsWithGlobalProps } from './lib/getStaticPropsWithGlobalProps'

export type GlobalProps = {
  popularMovies: IMoviePopular[]
  actors: IActor[]
  genres: IGenre[]
}

export async function fetchGlobalProps(): Promise<GlobalProps> {
  const popularMovies = await movieApi.mostPopular(BASE_URL)
  const actors = await actorsApi.getAll('', BASE_URL)
  const genres = await genresApi.getAll('', BASE_URL)

  return {
    popularMovies: popularMovies.data,
    actors: actors.data,
    genres: genres.data,
  }
}
export const GlobalProps = {
  getStaticProps: getStaticPropsWithGlobalProps,

  getEmptyStaticProps: getStaticPropsWithGlobalProps(async () => ({
    props: { popularMovies: [], actors: [], genres: [] },
  })),
  Provider: GlobalPropsContextProvider,
  use: useGlobalProps,
  extract: extractGlobalProps,
}
