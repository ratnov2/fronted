import GenresPage from '@/components/AdminPanel/Genres/GenresPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const genres = () => {
  return (
    <div><GenresPage /></div>
  )
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default genres