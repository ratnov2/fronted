import { genresApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { IInputGenre } from './genre-edit.interface'

const useEditGenre = ()=>{
  const { query } = useRouter()
  const id = String(query.id)
  
  const genre = useQuery('getByGenre', () => genresApi.getOne(id), {
    enabled: !!query.id,
    select: (genre) => ({
      icon: genre.data.icon,
      description: genre.data.description,
      name: genre.data.name,
      slug: genre.data.slug,
    }),
  })
  
  useEffect(() => {
    if (genre.data) reset(genre.data)
  }, [genre.data])
  
  const {
    register,
    reset,
    handleSubmit,
    watch,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<IInputGenre>({})
  
  return {register, handleSubmit,getValues,setValue,errors, control, id}
}
export default useEditGenre