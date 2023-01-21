import { usersApi } from '@/api/dataAPI'
import React from 'react'
import { useMutation } from 'react-query'
import Button from 'ui/form-ui/button/Button'
import useEditUser from './useEditUser'
import { IInputUser } from './user-edit.interface'
import FieldScope from './FormContainer/UserFieldScope'
import { TypesUserDataPut } from '@/api/api.interface'

const EditUser = () => {
  const { register, errors, handleSubmit, control, push, id } = useEditUser()

  const { mutate } = useMutation('putUser', (data:TypesUserDataPut) => usersApi.put(data), {
    onSuccess: () => push(`../../users`),
  })

  const onSubmit = (dataLog: IInputUser) => {
    return mutate({ ...dataLog, _id: id })
  }
  return (
    <>
      <div>
        <h1 className="text-2xl mb-5">Edit Actor</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldScope register={register} errors={errors} control={control} />
          <div>
            <Button className="bg-primary">Send</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditUser
