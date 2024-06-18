import { actorsApi, genresApi, movieApi } from "@/api/dataAPI"
import { getMovieUrl } from "@/configs/url.config"
import { IActor, IGenre } from "@/shared/types/movie.types"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"


export const useMoviesPage = ()=>{
  const { query } = useRouter()

  const movie = useQuery(
    [String(query.movie)],
    () => movieApi.getById(String(query.movie)),
    {
      enabled: (!!query.movie),
    }
  )
  
  useEffect(()=>{
    if(movie.isSuccess) movie.refetch()
  },[query])

  const movieByGenre = useQuery(
    ['getMovieByGenre'],
    () => movieApi.getByGenres(movie.data?.data.genres),
    {
      enabled: !!movie.data ,
      select:({data})=>data.map(el=>({
        posterPath:el.poster,
        url:getMovieUrl(el._id),
        name:el.title
      }))
    }
  )

  const countUpdate = useMutation(['countUpdate'], () =>
    movieApi.countPost(movie.data ? movie.data?.data.slug : '')
  )
    
  useEffect(() => {
    if(!countUpdate.isSuccess && movie.data) countUpdate.mutate()
  }, [movie.data])

  const genres = useQuery(['getAllGenres'], () => genresApi.getAll())
  const actors = useQuery(['getAllActors'], () => actorsApi.getAll())

  const [ActorState, setActorState] = useState<IActor[]>()
  const [GenreState, setGenreState] = useState<IGenre[]>()

  useEffect(() => {
    if (genres.isSuccess && actors.isSuccess) {
      let genre: IGenre[] = []
      movie.data?.data.genres.map((el) => {
        genres.data?.data.map((el2) => {
          if (el === el2._id) genre.push(el2)
        })
      })
      let actor: IActor[] = []
      movie.data?.data.actors.map((el) => {
        actors.data?.data.map((el2) => {
          if (el === el2._id) actor.push(el2)
        })
      })
      setActorState(actor)
      setGenreState(genre)
    }
  }, [actors.isSuccess, genres.isSuccess,movie.data])

  useEffect(() => {}, [query])

  return {movie,ActorState,GenreState, movieByGenre}
}


