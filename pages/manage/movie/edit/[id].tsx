import EditMovie from '@/components/AdminPanel/Edit/EditMovie/EditMovie'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const movie = () => {
  return (
    <div>
      {' '}
      <EditMovie />
    </div>
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
export default movie
