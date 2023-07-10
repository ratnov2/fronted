import { IActor, IMovie, IMoviePopular } from '@/shared/types/movie.types'

export interface ICatalog {
	title: string
	description?: string
	movies: IMovie[] | IMoviePopular[]
}
