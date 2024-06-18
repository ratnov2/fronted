import { genresApi } from '@/api/dataAPI'
import { IGenre } from '@/shared/types/movie.types'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { IInputGenre } from './genre-edit.interface'

export const useReqEditGenre = (id: string) => {
  const { push } = useRouter()

  const { mutate } = useMutation(
    'putGenre',
    (data: IGenre) => genresApi.putId(data),
    {
      onSuccess: () => push(`../../genres`),
    }
  )
  const onSubmit = (formData: IInputGenre) => {
    return mutate({ ...formData, _id: id })
  }
  return { onSubmit }
}
