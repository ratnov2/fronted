import HomePage from '@/components/HomePage/HomePage'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import { FC } from 'react'

//type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home: FC = () => {
  const { popularMovies } = useGlobalProps()
  console.log('@#@#@#@#',popularMovies);
  
  return <HomePage />
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: { } }
})

export default Home
