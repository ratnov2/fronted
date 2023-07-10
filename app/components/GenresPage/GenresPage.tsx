import { genresApi } from '@/api/dataAPI'
import React from 'react'
import { useQuery } from 'react-query'
import Collections from 'ui/collections/Collections'

const GenresPage = () => {
  const collections = useQuery('getCollections', () =>
    genresApi.getCollections()
  )

  return (
    <div>
      {collections.data?.data && (
        <Collections collections={collections.data.data || []} />
      )}
    </div>
  )
}

export default GenresPage
