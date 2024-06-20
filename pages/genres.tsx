import GenresPage from '@/components/GenresPage/GenresPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const genres = () => {
  return <GenresPage />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})
export default genres
