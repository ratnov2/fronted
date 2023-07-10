import { TypeFieldScopeProps } from "@/components/Auth/FieldScope/fieldScope.interface";
import { TypeOfMaterialIcons } from "@/shared/types/icons.types";
import { IGenre } from "@/shared/types/movie.types";
import { Control, FieldErrorsImpl, UseFormRegister } from "react-hook-form";

export interface TypesScopeFieldGenre{
  register:UseFormRegister<IInputGenre>,
  errors:Partial<FieldErrorsImpl<IInputGenre>>
  control:Control<IInputGenre, any>
}

export interface IInputGenre {
  name:string,
  slug:string,
  icon:TypeOfMaterialIcons,
  description:string
}