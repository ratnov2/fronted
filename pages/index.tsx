import { $host } from '@/api/api'
import { movieApi } from '@/api/dataAPI'
import HomePage from '@/components/HomePage/HomePage'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { FC } from 'react'

const Home:FC<any> = ({data}) => {
  console.log('@@@@@@@',data)
  return <HomePage />
}

export const getStaticProps: GetStaticProps = async () => {
  // try {
    const {data} = await $host.get('api/movies/most-popular')
    //let gg = await data.json()
    return { props: { data } }
  // } catch (error) {
  //   return { props: { data: {f:2} } }
  // }
}

export default Home
