import Auth from '@/components/Auth/Auth'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const AuthPage = () => {
  return <Auth />
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})

export default AuthPage
