import ActorPage from '@/components/Actor/ActorPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React, { FC } from 'react'

const Actor: FC = (props) => {
  return <ActorPage />
}

export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default Actor
