import { actorsApi, genresApi, movieApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { IInputMovie } from './movie-edit.interface'

export const useEditMovie = () => {
  const { query } = useRouter()
  const id = String(query.id)

  const genre = useQuery('getByGenre', () => genresApi.getAll(), {
    enabled: !!query.id,
    select: (genre) =>
      genre.data.map((genre) => ({
        value: genre.name,
        label: genre.name,
        _id: genre._id,
      })),
  })
  const actor = useQuery('getActors', () => actorsApi.getAll(), {
    enabled: !!query.id,
    select: (actor) =>
      actor.data.map((actor) => ({
        value: actor.name,
        label: actor.name,
        _id: actor._id,
      })),
  })

  const movie = useQuery('getByMovie', () => movieApi.getById(id), {
    enabled: !!query.id,
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

  useEffect(() => {
    if (movie.data && genre.data && actor.data) {
      //@ts-ignore
      reset(movie.data)
    }
  }, [movie.data, genre.data, actor.data])

  const {
    register,
    reset,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<IInputMovie>({
    mode: 'onChange',
  })

  return {
    register,
    handleSubmit,
    getValues,
    setValue,
    errors,
    control,
    id,
    genre,
    actor,
    movie,
  }
}
