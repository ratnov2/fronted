import Statistics from '@/components/AdminPanel/Statistics/Statistics'
import { GlobalProps } from 'global-props/GlobalProps'
import React from 'react'

const StatisticsPage = () => {
  return (
    <Statistics />
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})
export default StatisticsPage