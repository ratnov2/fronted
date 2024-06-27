import { genresApi } from '@/api/dataAPI'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import React from 'react'
import Collections from 'ui/collections/Collections'

const GenresPage = () => {
  const { collectionByGenres } = useGlobalProps()
  return (
    <div>
      <Collections collections={collectionByGenres} />
    </div>
  )
}

export default GenresPage
