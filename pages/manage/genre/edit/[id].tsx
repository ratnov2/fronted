import GenreEdit from '@/components/AdminPanel/Edit/EditGenre/GenreEdit'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const genre = () => {
  return (
    <div>
      {' '}
      <GenreEdit />
    </div>
  )
}
export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default genre
