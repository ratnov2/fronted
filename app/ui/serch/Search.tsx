import React, { ChangeEvent, FC, useState } from 'react'
import style from './search.module.scss'
import icon from 'react-icons'
import { MdOutlineSearch } from 'react-icons/md'
import cn from 'classnames'
const Search:FC<any> = ({value, isValue ,className1,className2}) => {


  return (
    <div className={cn(style.input,className1)}>
      <input className={className2} type='text' placeholder='Search' value={value} onChange={(e:ChangeEvent<HTMLInputElement>)=>isValue(e.target.value)
      } />
      <span><MdOutlineSearch /></span>
    </div>
  )
}

export default Search