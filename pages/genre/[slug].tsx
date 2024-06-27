import { BASE_URL } from '@/api/api'
import { genresApi, movieApi } from '@/api/dataAPI'
import MoviesByGenre from '@/components/MoviesByGenre/MoviesByGenre'
import { IGenre, IMovie } from '@/shared/types/movie.types'
import { GlobalProps } from 'global-props/GlobalProps'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React, { Key } from 'react'
type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const slug = ({ moviesByGenre, genre }: PageProps) => {
  const { query } = useRouter()

  return (
    <div key={query.slug as Key}>
      <MoviesByGenre moviesByGenre={moviesByGenre} genre={genre} />
    </div>
  )
}

export async function getStaticPaths() {
  const genres = await genresApi.getAll('', BASE_URL)
  const paths = genres.data.map((genre) => ({
    params: { slug: genre.slug, id: genre._id },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = GlobalProps.getStaticProps(
  async (ctx, globalProps) => {
    const genre = globalProps.genres.find(
      (genre) => genre.slug === ctx.params?.slug
    )
    let movies: IMovie[] = []
    if (genre) {
      movies = (await movieApi.getByGenres([genre?._id], BASE_URL)).data
    }

    return {
      props: { moviesByGenre: movies, genre: genre as IGenre },
      revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE),
    }
  }
)

export default slug
