import { actorsApi, fileApi } from '@/api/dataAPI'
import { IActor } from '@/shared/types/movie.types'
import React from 'react'
import { useMutation } from 'react-query'
import Button from 'ui/form-ui/button/Button'
import useEditActor from './useEditActor'
import { IInputActor } from './actor-edit.interface'
import FieldScope from './FormContainer/ActorFieldScope'

import { Controller } from 'react-hook-form'
import {generateSlug} from '@/utils/generateSlug/generateSlug'
import FileUpload from 'ui/file-upload/FileUpload'

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
    (data: any) => actorsApi.putId(data),
    {
      onSuccess: () => push(`../../actors`),
    }
  )
  const request = useMutation(
    'createFileAndPutGenre',
    (data: any) => fileApi.post(data),
    {
      onSuccess: (dataLog) => {
        let data = getValues()
        let data2 = { ...data, photo: dataLog.data[0].url, _id: id }

        mutate(data2)
      },
    }
  )
  const onSubmit = (dataLog: IInputActor) => {
    if (dataLog.photo === photo) {
      let data2 = { ...dataLog, _id: id }
      return mutate(data2)
    }

    const formData = new FormData()
    formData.append('image', dataLog.photo)
    return request.mutate(formData)
  }
  return (
    <>
      <div>
        <h1 className='text-2xl mb-5'>Edit Actor</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldScope 
            register={register} 
            errors={errors} 
            generate = {()=>setValue('slug', generateSlug(getValues('name')))}
            control = {control}
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
