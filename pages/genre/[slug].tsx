import { BASE_URL } from '@/api/api'
import { genresApi } from '@/api/dataAPI'
import MoviesByGenre from '@/components/MoviesByGenre/MoviesByGenre'
import { IMovie } from '@/shared/types/movie.types'
import { GlobalProps } from 'global-props/GlobalProps'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC } from 'react'

const slug: FC = () => {
  return <MoviesByGenre />
}

export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default slug
