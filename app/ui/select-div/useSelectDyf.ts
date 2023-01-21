import { FC } from "react"
import { MultiValue } from "react-select";
import { TypesSelectDif, TypesUseSelectDif } from "./select-dif.interface"




export const useSelectDif = ({value,onChange,query,label}:TypesUseSelectDif)=>{

  const stateValue = () => {
    let state: {
      value: string
      label: string
      _id: string
    }[] = []
  
    if (value && query.isSuccess) {
      value.map((el) => {
        query.data.map((el2) => (!el2._id.indexOf(el) ? state.push(el2) : ''))
      })
    }
    return state
  }
  stateValue()
  const handler = (
    e: MultiValue<{
      value: string
      label: string
      _id: string
    }>
  ) => {
    let state: string[] = []
    e.map((el) => state.push(el._id))
    onChange(state)
  }

  return {stateValue, handler}
}