import cn from 'classnames'
import React, { FC } from 'react'
import { TypeFieldProps } from './field.interface'
import style from './field.module.scss'

const Field = React.forwardRef<HTMLInputElement,any>(({type, textLabel,error,sharedStyle, ...rest},ref) => {

  
  return (
    <div className={cn(style.field,sharedStyle)}>
      <label>{textLabel}</label>
      <input  ref={ref} type={type} {...rest} className={cn(error && style.errorBorder)}/>
      {error && <span>{error}</span>}
    </div>
  )
})

Field.displayName='Field'
export default Field