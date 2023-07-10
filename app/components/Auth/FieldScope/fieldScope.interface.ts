import { UseFormRegister , RegisterOptions, FieldErrorsImpl} from "react-hook-form"
import { IInputs } from "../auth.interface"

export interface TypeFieldScopeProps {
  register:UseFormRegister<IInputs>,
  errors:Partial<FieldErrorsImpl<IInputs>>
}