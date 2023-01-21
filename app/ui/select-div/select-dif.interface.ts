import { UseQueryResult } from "react-query";

export interface TypesSelectDif{
  value:string[]
  onChange: (...event: any[]) => void
  query:UseQueryResult<{
    value: string;
    label: string;
    _id: string;
}[], unknown>
  label:string
}

export type TypesUseSelectDif = {
  value:string[]
  onChange: (...event: any[]) => void
  query:UseQueryResult<{
    value: string;
    label: string;
    _id: string;
}[], unknown>
  label:string
}

