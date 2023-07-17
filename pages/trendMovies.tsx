import TrendingNowPage from '@/components/TrendingNow/TrendingNowPage'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const trendMovies = () => {
  return (
    <div>
      <TrendingNowPage />
    </div>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default trendMovies
