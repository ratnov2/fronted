import { actorsApi, genresApi, movieApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

export const useRequest = (id: string) => {
  const genre = useQuery('getByGenre', () => genresApi.getAll(), {
    enabled: !!id,
    select: (genre) =>
      genre.data.map((genre) => ({
        value: genre.name,
        label: genre.name,
        _id: genre._id,
      })),
  })
  const actor = useQuery('getActors', () => actorsApi.getAll(), {
    enabled: !!id,
    select: (actor) =>
      actor.data.map((actor) => ({
        value: actor.name,
        label: actor.name,
        _id: actor._id,
      })),
  })

  const movie = useQuery('getByMovie', () => movieApi.getById(id), {
    enabled: !!id,
    select: (movie) => ({
      title: movie.data.title,
      slug: movie.data.slug,
      parameters: {
        country: movie.data.parameters?.country,
        duration: movie.data.parameters?.duration,
        year: movie.data.parameters?.year,
      },
      genres: movie.data.genres,
      actors: movie.data.actors,
      bigPoster: movie.data.bigPoster,
      poster: movie.data.poster,
      videoUrl: movie.data.videoUrl,
    }),
  })
  return { actor, genre, movie }
}
