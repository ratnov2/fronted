import { TypeOfMaterialIcons } from "@/shared/types/icons.types"

export interface IMenuItem{
  icon:TypeOfMaterialIcons,
  link:string,
  title:string
}

export interface IMenu{
  name:string,
  item: IMenuItem[]
}
export interface IGenres{
  icon: TypeOfMaterialIcons,
  name: string,
  slug:string
}

export interface IMenuGeneral{
  name:string,
  item:IMenuItem[],
  admin:IMenuItem
  login:IMenuItem
}