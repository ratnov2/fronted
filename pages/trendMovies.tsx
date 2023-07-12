import TrendingNowPage from '@/components/TrendingNow/TrendingNowPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const trendMovies = () => {
  return <TrendingNowPage />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})
export default trendMovies
