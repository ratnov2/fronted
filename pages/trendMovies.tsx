import TrendingNowPage from '@/components/TrendingNow/TrendingNowPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const trendMovies = () => {
  return <TrendingNowPage />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})
export default trendMovies
