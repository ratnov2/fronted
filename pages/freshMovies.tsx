import FreshMoviesPage from '@/components/FreshMoviesPage/FreshMoviesPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const freshMoviesPage = () => {
  return (
    <div>
      <FreshMoviesPage />
    </div>
  )
}


export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default freshMoviesPage