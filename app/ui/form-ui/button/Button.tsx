import React, { FC } from 'react'
import { TypeButtonProps } from './button.interface'
import cn from 'classnames'
import style from './button.module.scss'

const Button:FC<TypeButtonProps> = ({children, className, ...rest} ) => {
  return (
    <button className={cn(style.button,className)} {...rest}>{children}</button>
  )
}

export default Button