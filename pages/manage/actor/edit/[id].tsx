import EditActor from '@/components/AdminPanel/Edit/EditActor/EditActor'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const actorEdit = () => {
  return (
    <div>
      <EditActor />
    </div>
  )
}
export async function getStaticPaths() {
  return { paths:[], fallback: false }
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: { movie: '' } }
})
export default actorEdit
