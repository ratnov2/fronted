import { movieApi, usersApi } from "@/api/dataAPI"
import { useQuery } from "react-query"


export const useStatistics = ()=>{
  const countUsers = useQuery('getCountUsers', () => usersApi.count(), {
    select: ({ data }) => data,
  })
  const moviePopular = useQuery(
    'getMostPopular[0]',
    () => movieApi.mostPopular(),
    {
      select: ({ data }) => ({
        countOpened: data[0].countOpened,
        bigPoster: data[0].bigPoster,
        slug:data[0]._id
      }),
    }
  )
  return {countUsers,moviePopular}
}