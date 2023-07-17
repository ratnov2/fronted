import TrendingNowPage from '@/components/TrendingNow/TrendingNowPage'
import { GlobalProps } from 'global-props/GlobalProps'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import React from 'react'

const trendMovies = () => {
  const { popularMovies} =  useGlobalProps()
  
  return (
    <div>
      <TrendingNowPage />
    </div>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {},fallback: false }
})
export default trendMovies