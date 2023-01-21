import { genresApi } from '@/api/dataAPI'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import Select, { MultiValue } from 'react-select'

import makeAnimated from 'react-select/animated'
import { TypesSelectDif } from './select-dif.interface'
import { useSelectDif } from './useSelectDyf'

const animatedComponents = makeAnimated()

const SelectDif: FC<TypesSelectDif> = ({ value, onChange, query, label }) => {
  
  const {stateValue,handler} = useSelectDif({value,onChange,query,label})

  return (
    <div>
      <label>{label}</label>
      <Select
        classNamePrefix="custom-select"
        options={query.data}
        value={stateValue()}
        onChange={(e) => handler(e)}
        components={animatedComponents}
        isMulti
      />
    </div>
  )
}

export default SelectDif
