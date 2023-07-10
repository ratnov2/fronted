import React from 'react'
import Button from 'ui/form-ui/button/Button'
import {useEditMovie} from './useEditMovie'
import MovieFieldScope from './FormContainer/MovieFieldScope'

import { generateSlug } from '@/utils/generateSlug/generateSlug'

import { useReqEditMovie } from './useReqEditMovie'

const EditMovie = () => {
  const {
    register,
    errors,
    handleSubmit,
    getValues,
    setValue,
    control,
    id,
    genre,
    actor
  } = useEditMovie()
  const { onSubmit } = useReqEditMovie(id)

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
