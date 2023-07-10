import { actorsApi, genresApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { IInputActor } from './actor-edit.interface'


const useEditGenre = ()=>{
  const { query, push } = useRouter()
  const id = String(query.id)
  
  const actor = useQuery('getByActor', () => actorsApi.getOne(id), {
    enabled: !!query.id,
    select: (actor) => ({
      name: actor.data.name,
      slug: actor.data.slug,
      photo: actor.data.photo
    }),
  })
  
  useEffect(() => {
    if (actor.data) reset(actor.data)
  }, [actor.data])
  
  const {
    register,
    reset,
    handleSubmit,
    watch,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<IInputActor>({
    mode: 'onChange',
  })
  
  return {register, handleSubmit,getValues,setValue,errors, control, id, push, photo:actor.data?.photo}
}
export default useEditGenre