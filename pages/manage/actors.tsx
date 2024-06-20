import ActorsPage from '@/components/AdminPanel/ActorsPage/ActorsPage'
import UsersPage from '@/components/AdminPanel/UsersPage/UsersPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const actors = () => {
  return <ActorsPage />
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})
export default actors
