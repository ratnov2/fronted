import { Control, FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

export interface TypesScopeFieldActor {
  register: UseFormRegister<IInputActor>
  errors: Partial<FieldErrorsImpl<IInputActor>>
  generate: () => void
  control: Control<IInputActor, any>
}

export interface IInputActor {
  name: string
  slug: string
  photo: string
  _id: string
}
