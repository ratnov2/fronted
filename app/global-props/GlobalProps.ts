import { BASE_URL } from '@/api/api'
import { actorsApi, genresApi, movieApi, usersApi } from '@/api/dataAPI'
import {
  IActor,
  IGenre,
  IMovie,
  IMovieFavorite,
  IMoviePopular,
} from '@/shared/types/movie.types'
import {
  GlobalPropsContextProvider,
  useGlobalProps,
} from './contexts/GlobalPropsContext'
import { extractGlobalProps } from './lib/extractGlobalProps'
import { getStaticPropsWithGlobalProps } from './lib/getStaticPropsWithGlobalProps'
import { ICollection } from 'ui/collections/collections.types'

export type GlobalProps = {
  popularMovies: IMoviePopular[]
  actors: IActor[]
  genres: IGenre[]
  allMovies: IMovie[]
  collectionByGenres: ICollection[]
}
export async function fetchGlobalProps(): Promise<GlobalProps> {
  const popularMovies = movieApi.mostPopular(BASE_URL)
  const allMovies = movieApi.getAllMovies('', BASE_URL)
  const actors = actorsApi.getAll('', BASE_URL)
  const genres = genresApi.getAll('', BASE_URL)
  const collectionByGenres = genresApi.getCollections(BASE_URL)

  try {
    const { data: popularMoviesData } = await popularMovies
    const { data: actorsData } = await actors
    const { data: genresData } = await genres
    const { data: allMoviesData } = await allMovies
    const { data: collectionByGenresData } = await collectionByGenres
    return {
      popularMovies: popularMoviesData,
      actors: actorsData,
      genres: genresData,
      allMovies: allMoviesData,
      collectionByGenres: collectionByGenresData,
    }
  } catch (e) {
    return GlobalPropsEmpty
  }
}
export const GlobalProps = {
  getStaticProps: getStaticPropsWithGlobalProps,

  getEmptyStaticProps: getStaticPropsWithGlobalProps(async () => ({
    props: { popularMovies: [], actors: [], genres: [], allMovies: [] },
  })),
  Provider: GlobalPropsContextProvider,
  use: useGlobalProps,
  extract: extractGlobalProps,
}

export const GlobalPropsEmpty = {
  popularMovies: [],
  actors: [],
  genres: [],
  allMovies: [],
  collectionByGenres: [],
}

//const GlobalProps = () => {}
