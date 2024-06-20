import Auth from '@/components/Auth/Auth'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const AuthPage = () => {
  return <Auth />
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})

export default AuthPage
