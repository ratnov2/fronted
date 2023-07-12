import { movieApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import Catalog from 'ui/catalog/Catalog'

const ActorPage = () => {
  const { query } = useRouter()

  const movies = useQuery(
    [String(query.actor)],
    () => movieApi.getByActor(String(query.id)),
    {
      enabled: !!query.id,
    }
  )
  return <div>
    {movies.data?.data && <Catalog
          movies={movies.data.data || []}
          title="Movies"
          description="Movies by actor"
        />}
  </div>
}
export default ActorPage
