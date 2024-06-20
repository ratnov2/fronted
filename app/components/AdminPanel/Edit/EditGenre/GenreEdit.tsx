import React from 'react'
import Button from 'ui/form-ui/button/Button'
import FieldScope from './FormContainer/GenreFieldScope'
import useEditGenre from './useEditGenre'

import { useReqEditGenre } from './useReqEditGenre'

const GenreEdit = () => {
  const { register, errors, handleSubmit, setValue, control, id } =
    useEditGenre()

  const { onSubmit } = useReqEditGenre(id)

  return (
    <div>
      <h1>Edit Genre</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldScope register={register} errors={errors} control={control} />
        <Button
          className="bg-primary"
          onClick={() => setValue('icon', 'Md10Mp')}
        >
          Send
        </Button>
      </form>
    </div>
  )
}

export default GenreEdit
