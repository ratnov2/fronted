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
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})

export default slug
