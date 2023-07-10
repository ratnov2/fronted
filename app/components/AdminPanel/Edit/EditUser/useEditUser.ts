import { actorsApi, genresApi, usersApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { IInputUser } from './user-edit.interface'


const useEditUser = ()=>{
  const { query, push } = useRouter()
  const id = String(query.id)
  
  const user = useQuery('getByUser', () => usersApi.getById(id), {
    enabled: !!query.id,
    select: (user) => ({
      email:user.data.email,
      password:'',
      isAdmin:user.data.isAdmin
    }),
  })
  const onChange = (value:boolean)=>{
    return !value
  }
  useEffect(() => {
    if (user.data) reset(user.data)
  }, [user.data])
  
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<IInputUser>({
    mode: 'onChange',
  })
  
  return {register, handleSubmit,getValues,setValue,errors, control, id, push}
}
export default useEditUser