import EditUser from '@/components/AdminPanel/Edit/EditUser/EditUser'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const user= () => {
  return (
    <div><EditUser /></div>
  )
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
export default user