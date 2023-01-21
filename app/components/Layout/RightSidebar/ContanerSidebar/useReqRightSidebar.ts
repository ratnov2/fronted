import { movieApi, usersApi } from "@/api/dataAPI"
import { useQuery } from "react-query"


export const useReqRightSidebar = ()=>{

  const popularMovies = useQuery('getPopularMovies', ()=>movieApi.mostPopular(),{
    select:({data}) =>data.slice(0,3).map((el)=>({
      id:el._id,
      name:el.title,
      genres:String(...el.genres.map((el2)=>el2.name)),
      rating:el.rating,
      poster:el.poster,
    }))
  })

  const favorites = useQuery('getFavoritesMovies',()=>usersApi.getFavoriteFilms(),{
    select:({data}) =>data.slice(0,3).map((el)=>({
      id:el._id,
      name:el.title,
      genres:String(...el.genres.map((el2)=>el2.name)),
      rating:el.rating,
      poster:el.poster,
    }))
  })

  return {popularMovies, favorites}
}