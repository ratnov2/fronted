import { $host } from '@/api/api'
import { movieApi } from '@/api/dataAPI'
import HomePage from '@/components/HomePage/HomePage'
// import { GetStaticPropsContext } from '@/components/Provider/MainProvider'
import { getMovieUrl } from '@/configs/url.config'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { FC, useContext, useEffect } from 'react'

const Home: FC<any> = ({ movies }) => {
  return <HomePage />
}

export const getStaticProps: GetStaticProps = async () => {
  //const myContext = useContext(GetStaticPropsContext)
  try {
    const { data: moviesData } = await $host.get(
      'https://test2-ratnov2.vercel.app/api/movies/most-popular'
    )
    const movies = moviesData.map((movie: any) => ({
      posterPath: movie.poster,
      name: movie.title,
      url: getMovieUrl(movie._id),
    }))
    return { props: { movies } }
  } catch (error) {
    return { props: { movies: {} } }
  }
}

export default Home
