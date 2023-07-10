import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import FileUpload from 'ui/file-upload/FileUpload'
import VideoUpload from 'ui/file-upload/VideoUpload'
import Field from 'ui/form-ui/Field/Field'
import { TypesScopeFieldMovie } from '../movie-edit.interface'

import style from '../movie-edit.module.scss'
const DynamicSelect = dynamic(() => import('ui/select-div/SelectDif'), {
  ssr: false,
})
const MovieFieldScope: FC<TypesScopeFieldMovie> = ({
  register,
  errors,
  generate,
  control,
  genre,
  actor,
}) => {
  return (
    <>
      <div className="flex">
        <Field
          {...register('title', {
            required: true,
            minLength: {
              value: 3,
              message: 'name have to be more 3 characters',
            },
            validate: {
              always: (value) =>
                value !== '' || 'This should almost always trigger',
            },
          })}
          type="text"
          textLabel="title"
          sharedStyle="w-1/2"
          error={errors.title?.message}
        />
        <div className="w-1/2 ml-6 relative">
          <Field
            {...register('slug', {
              required: true,
              minLength: {
                value: 3,
                message: 'name have to be more 3 characters',
              },
            })}
            type="text"
            textLabel="Slug"
            sharedStyle=""
            error={errors.slug?.message}
          />
          <div
            onClick={() => generate()}
            className="absolute top-10 right-0 ease-in duration-75 bg-gray-700 cursor-pointer rounded-lg px-2 hover:bg-gray-600"
          >
            generate
          </div>
        </div>
      </div>
      <div className={style.twoRow}>
        <Field
          {...register('parameters.country', {
            required: true,
            minLength: {
              value: 2,
              message: 'name have to be more 2 characters',
            },
          })}
          type="text"
          textLabel="country"
          sharedStyle="w-1/3"
          error={errors.parameters?.country?.message}
        />
        <Field
          {...register('parameters.duration', {
            required: true,
            minLength: {
              value: 1,
              message: 'name have to be more 1 characters',
            },
          })}
          type="text"
          textLabel="duration"
          sharedStyle="w-1/3 ml-6"
          error={errors.parameters?.duration?.message}
        />
        <Field
          {...register('parameters.year', {
            required: true,
            minLength: {
              value: 1,
              message: 'name have to be more 1 characters',
            },
          })}
          type="text"
          textLabel="year"
          sharedStyle="w-1/3 ml-6"
          error={errors.parameters?.year?.message}
        />
      </div>
      <div className={style.select}>
        <Controller
          control={control}
          name="genres"
          render={({ field: { value, onChange } }) => {
            return (
              <DynamicSelect
                value={value}
                onChange={onChange}
                query={genre}
                label="GENRES"
              />
            )
          }}
        />
        <Controller
          control={control}
          name="actors"
          render={({ field: { value, onChange } }) => {
            return (
              <DynamicSelect
                value={value}
                onChange={onChange}
                query={actor}
                label="ACTORS"
              />
            )
          }}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="bigPoster"
          defaultValue=""
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <FileUpload onChange={onChange} value={value} error={error} />
          )}
        />
        <Controller
          control={control}
          name="poster"
          defaultValue=""
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <FileUpload onChange={onChange} value={value} error={error} />
          )}
        />
      </div>
      <Controller
        control={control}
        name="videoUrl"
        defaultValue=""
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <VideoUpload
            onChange={onChange}
            value={value}
            error={error}
            classNameShare="block mt-20"
            classNameVideo="w-full h-full rounded-2xl"
          />
        )}
      />
    </>
  )
}
export default MovieFieldScope
