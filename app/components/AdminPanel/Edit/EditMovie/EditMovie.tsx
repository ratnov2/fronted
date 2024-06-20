import React, { useEffect } from 'react'
import Button from 'ui/form-ui/button/Button'
import { useEditMovie } from './useEditMovie'
import MovieFieldScope from './FormContainer/MovieFieldScope'

import { generateSlug } from '@/utils/generateSlug/generateSlug'

import { useReqEditMovie } from './useReqEditMovie'
import { useRequest } from './useRequest'
import { useRouter } from 'next/router'

const EditMovie = () => {
  const { query } = useRouter()
  const id = String(query.id)

  const {
    register,
    reset,
    errors,
    handleSubmit,
    getValues,
    setValue,
    control,
  } = useEditMovie()

  const { actor, genre, movie } = useRequest(id)

  const { onSubmit } = useReqEditMovie(id)

  useEffect(() => {
    if (movie.data && genre.data && actor.data) {
      reset(movie.data)
    }
  }, [movie.data, genre.data, actor.data])

  return (
    <>
      <div>
        <h1 className="text-2xl mb-5">Edit Movie</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MovieFieldScope
            register={register}
            errors={errors}
            generate={() => setValue('slug', generateSlug(getValues('title')))}
            control={control}
            genre={genre}
            actor={actor}
          />
          <div>
            <Button className="bg-primary">Send</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditMovie
