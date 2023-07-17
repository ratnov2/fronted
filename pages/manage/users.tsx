import UsersPage from '@/components/AdminPanel/UsersPage/UsersPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const users = () => {
  return (
    <UsersPage />
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default users