import MoviePage from '@/components/MoviePage/MoviePage'
import { GlobalProps } from 'global-props/GlobalProps'
import { GetServerSidePropsContext } from 'next'
import React from 'react'

const movie = () => {
  return (
    <div>
      <MoviePage />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})

export default movie
