import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import Field from 'ui/form-ui/Field/Field'
import { TypesScopeFieldGenre } from '../genre-edit.interface'

const DynamicEditorText = dynamic(() => import('ui/editor-text/EditorText'), {
  ssr: false,
})

const FieldScope: FC<TypesScopeFieldGenre> = ({
  register,
  errors,
  control,
}) => {
  return (
    <>
      <div className="flex">
        <Field
          {...register('name', {
            required: true,
          })}
          type="text"
          textLabel="name"
          sharedStyle="w-1/2"
        />
        <div className="w-1/2 ml-6">
          <Field
            {...register('slug', { required: true })}
            type="text"
            textLabel="Slug"
            sharedStyle=""
          />
          <div className="absolute">generate</div>
        </div>
        <Field
          {...register('icon', { required: true })}
          type="text"
          textLabel="icon"
          sharedStyle="w-1/2 ml-6"
        />
      </div>
      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <DynamicEditorText
            onChange={onChange}
            value={value}
            error={error}
          />
        )}
      />
    </>
  )
}
export default FieldScope
