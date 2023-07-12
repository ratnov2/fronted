import FreshMoviesPage from '@/components/FreshMoviesPage/FreshMoviesPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const freshMoviesPage = () => {
  return <FreshMoviesPage />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})
export default freshMoviesPage
