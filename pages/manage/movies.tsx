import MoviesPage from '@/components/AdminPanel/MoviesPage/MoviesPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const movies = () => {
  return (
    <MoviesPage />
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})
export default movies