import { BASE_URL } from '@/api/api'
import { actorsApi, movieApi, usersApi } from '@/api/dataAPI'
import {
  IActor,
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
}

export async function fetchGlobalProps(): Promise<GlobalProps> {
  const popularMovies = await movieApi.mostPopular(BASE_URL)
  const actors = await actorsApi.getAll('', BASE_URL)
  return {
    popularMovies: popularMovies.data,
    actors: actors.data,
  }
}
export const GlobalProps = {
  getStaticProps: getStaticPropsWithGlobalProps,

  getEmptyStaticProps: getStaticPropsWithGlobalProps(async () => ({
    props: { popularMovies: [], actors: [] },
  })),
  Provider: GlobalPropsContextProvider,
  use: useGlobalProps,
  extract: extractGlobalProps,
}
