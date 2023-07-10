
import { ITableItem } from "../../components/AdminPanel/admin.interface"

export interface TypePropsHeaderTable{
  data:string[]
}
export interface TypesRenderAdminTableProps {
  data:ITableItem[] | undefined,
  isLoading:boolean,
  removeHandler:(_id:string) =>void,
  edit:string

}