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
  const popularMovies = movieApi.mostPopular(BASE_URL)
  const actors = actorsApi.getAll('', BASE_URL)
  const genres = genresApi.getAll('', BASE_URL)
  try {
    const popularMoviesData = await popularMovies
    const actorsData = await actors
    const genresData = await genres

    return {
      popularMovies: popularMoviesData.data,
      actors: actorsData.data,
      genres: genresData.data,
    }
  } catch (e) {
    return {
      popularMovies: [],
      actors: [],
      genres: [],
    }
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
