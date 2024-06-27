import Favorite from '@/components/Favorite/Favorite'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const favorite = () => {
  return <Favorite />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})
export default favorite
