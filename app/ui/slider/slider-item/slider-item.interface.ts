import { IGenre } from "@/shared/types/movie.types"

export interface ISliderItem {
  currentImg:string,
  movie:{
    id: string
    bigPoster: string
    genres: IGenre[]
    title: string
  }
}