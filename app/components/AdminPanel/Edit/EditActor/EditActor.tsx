import { actorsApi, fileApi } from '@/api/dataAPI'
import React from 'react'
import { useMutation } from 'react-query'
import Button from 'ui/form-ui/button/Button'
import useEditActor from './useEditActor'
import { IInputActor } from './actor-edit.interface'
import FieldScope from './FormContainer/ActorFieldScope'

import { generateSlug } from '@/utils/generateSlug/generateSlug'

const EditActor = () => {
  const {
    register,
    errors,
    handleSubmit,
    getValues,
    setValue,
    control,
    id,
    push,
    photo,
  } = useEditActor()

  const { mutate } = useMutation(
    'putActor',
    (data: IInputActor & { _id: string }) => actorsApi.putId(data),
    {
      onSuccess: () => push(`../../actors`),
    }
  )

  const onSubmit = (formData: IInputActor) => {
    return mutate({ ...formData, _id: id })
  }
  return (
    <>
      <div>
        <h1 className="text-2xl mb-5">Edit Actor</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldScope
            register={register}
            errors={errors}
            generate={() => setValue('slug', generateSlug(getValues('name')))}
            control={control}
          />
          <div>
            <Button className="bg-primary">Send</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditActor
