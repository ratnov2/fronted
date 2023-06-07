import { $host, BASE_URL } from '@/api/api'
import { actorsApi, movieApi } from '@/api/dataAPI'
import { getActorUrl } from '@/configs/url.config'
import { IActor, IMoviePopular } from '@/shared/types/movie.types'
import { AxiosResponse } from 'axios'
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
  const moviesPopular = await movieApi.mostPopular(BASE_URL)
  const actors = await actorsApi.getAll('', BASE_URL)
  const actorsConverted = actors.data.map((el) => ({
    posterPath: el.photo,
    name: el.name,
    url: getActorUrl(el._id),
  }))
  return {
    popularMovies: moviesPopular.data,
    actors: actorsConverted as any,
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
