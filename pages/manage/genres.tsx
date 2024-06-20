import GenresPage from '@/components/AdminPanel/Genres/GenresPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const genres = () => {
  return (
    <div><GenresPage /></div>
  )
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})
export default genres