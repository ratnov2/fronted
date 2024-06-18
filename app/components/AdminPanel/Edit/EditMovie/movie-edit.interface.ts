import { Control, FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { UseQueryResult } from 'react-query'

export interface TypesScopeFieldMovie {
  register: UseFormRegister<IInputMovie>
  errors: Partial<FieldErrorsImpl<IInputMovie>>
  generate: () => void
  control: Control<IInputMovie, any>
  genre: UseQueryResult<
    {
      value: string
      label: string
      _id: string
    }[],
    unknown
  >
  actor: UseQueryResult<
    {
      value: string
      label: string
      _id: string
    }[],
    unknown
  >
}
export interface IInputMovie {
  title: string
  slug: string
  genres: string[]
  actors: string[]
  parameters: {
    country: string
    duration: number
    year: number
  }
  bigPoster: string
  poster: string
  videoUrl: string
}

export interface TypesSelect {
  value: string[]
  onChange: (...event: any[]) => void
  query: UseQueryResult<
    {
      value: string
      label: string
      _id: string
    }[],
    unknown
  >
  label: string
}
export interface TypesUseReqEditMovie {
  push: any
  id: string
}
