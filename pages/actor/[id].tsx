import ActorPage from '@/components/Actor/ActorPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const Actor = () => {
  return <ActorPage />
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
export default Actor
