import { Control, FieldErrorsImpl, UseFormRegister } from "react-hook-form"

export interface TypesScopeFieldUser{
  register:UseFormRegister<IInputUser>,
  errors:Partial<FieldErrorsImpl<IInputUser>>
  control:Control<IInputUser,any>
}
export interface IInputUser{
  email:string,
  password:string,
  isAdmin:boolean
}