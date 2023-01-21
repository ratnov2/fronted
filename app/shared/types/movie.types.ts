import { TypeOfMaterialIcons } from "./icons.types"

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeOfMaterialIcons
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters?: IParameters
	genres: string[]
	actors: string[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
export interface IMoviePopular {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters?: IParameters
	genres: IGenre[]
	actors: string[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
export interface IMovieFavorite {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters?: IParameters
	genres: IGenre[]
	actors: string[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
