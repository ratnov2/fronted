import EditUser from '@/components/AdminPanel/Edit/EditUser/EditUser'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const user= () => {
  return (
    <div><EditUser /></div>
  )
}

export async function getStaticPaths() {
  return { paths:[], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: { movie: '' } }
})
export default user