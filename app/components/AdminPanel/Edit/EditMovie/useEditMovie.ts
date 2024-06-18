import { actorsApi, genresApi, movieApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { IInputMovie } from './movie-edit.interface'

export const useEditMovie = () => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<IInputMovie>({
    mode: 'onChange',
  })

  return {
    register,
    handleSubmit,
    getValues,
    setValue,
    errors,
    control,
    reset,
  }
}
