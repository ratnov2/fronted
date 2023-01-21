import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import FileUpload from 'ui/file-upload/FileUpload'
import Field from 'ui/form-ui/Field/Field'
import { TypesScopeFieldActor } from '../actor-edit.interface'

const FieldScope: FC<TypesScopeFieldActor> = ({
  register,
  errors,
  generate,
  control,
}) => {
  return (
    <>
      <div className="flex">
        <Field
          {...register('name', {
            required: true,
            minLength: {
              value: 3,
              message: 'name have to be more 3 characters',
            },
          })}
          type="text"
          textLabel="name"
          sharedStyle="w-1/2"
          error={errors.name?.message}
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
      <Controller
        control={control}
        name="photo"
        defaultValue=""
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FileUpload
            onChange={onChange}
            value={value}
            error={error}
            placeholder=""
          />
        )}
      />
    </>
  )
}
export default FieldScope
