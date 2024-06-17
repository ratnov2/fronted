import HomePage from '@/components/HomePage/HomePage'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'

//type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home = () => {
  return <HomePage />
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})

export default Home
