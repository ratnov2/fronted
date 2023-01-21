
export type ITableItem = {
  _id:string,
  createdAt?:string,
  item:string[]
}
export interface TypesAdminPanel {

}

export type INavigate={
  title:string,
  link:string
}


export interface IItemNavigate{
  item:INavigate[],
  
}