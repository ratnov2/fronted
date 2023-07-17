import MoviePage from '@/components/MoviePage/MoviePage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const movie = () => {
  return <MoviePage />
}

export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default movie
