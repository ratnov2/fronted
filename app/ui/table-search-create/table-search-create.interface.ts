

export interface TypesTableSearchCreate {
  value:string,
  isValue: React.Dispatch<React.SetStateAction<string>>
  createHandler:()=>void
  title:string
}