import HomePage from '@/components/HomePage/HomePage'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import { FC } from 'react'

const Home: FC = () => {
  return <HomePage />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, fallback: false }
})

export default Home
