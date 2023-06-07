import HomePage from '@/components/HomePage/HomePage'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import { FC } from 'react'

//type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home: FC<any> = () => {
  // const ff = useGlobalProps()
  // console.log('%%%%',ff)
  return <HomePage />
}

// export const getStaticProps = GlobalProps.getStaticProps<{exampleValue: number}>(
//   async (ctx) => {
//       return { props: { exampleValue: 1 } }
//   }
// )

export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: { exampleValue2: 1 } }
})

export default Home
