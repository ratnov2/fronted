import HomePage from '@/components/HomePage/HomePage'
import { GlobalProps } from 'global-props/GlobalProps'

const Home = () => {
  return <HomePage />
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})

export default Home
