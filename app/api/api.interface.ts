import { IGenres } from "@/components/Home/leftSidebar/menu.interface"

export interface TypePostAuth{
  email:string,
  password:string
}
export interface TypeResponseGetGenres{
  data:IGenres[]
}

export type TypesUserDataPut = {
  email:string,
  password:string,
  isAdmin:boolean,
  _id:string
}