import ActorPage from '@/components/Actor/ActorPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const Actor = () => {
  return <ActorPage />
}
export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: { movie: '' } }
})
export default Actor
