import GenresPage from '@/components/GenresPage/GenresPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const genres = () => {
  return <GenresPage />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})
export default genres
