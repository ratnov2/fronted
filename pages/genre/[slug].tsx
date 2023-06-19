import { genresApi, movieApi } from '@/api/dataAPI'
import MoviesByGenre from '@/components/MoviesByGenre/MoviesByGenre'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

const slug = () => {
  return (
    <div>
      <MoviesByGenre />
    </div>
  )
}

// export const getStaticPath: GetStaticPaths =  async() => {
//   return {
//     paths: [
//       // String variant:
//       '/blog/first-post',
//       // Object variant:
//       { params: { slug: 'second-post' } },
//     ],
//     fallback: true,
//   }
// }
  // try {
  //   const { data: genres } = await genresApi.getAll()
  //   const paths = genres.map((g) => ({ params: { slug: 'thriller' } }))
  //   return { paths:paths, fallback: 'blocking' }
  // } catch (error) {
  //   return { paths: { params: { slug: 'thriller' } }, fallback: false }
  // }


// export const getStaticProps:GetStaticProps = async({params})=>{
//   //await 
//   return {props: []}
// }

export default slug
