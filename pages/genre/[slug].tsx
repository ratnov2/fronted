import MoviesByGenre from '@/components/MoviesByGenre/MoviesByGenre'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const slug = () => {
  return (
    <div>
      <MoviesByGenre />
    </div>
  )
}

export async function getStaticPaths() {
  return { paths:[], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: { movie: '' } }
})

export default slug
