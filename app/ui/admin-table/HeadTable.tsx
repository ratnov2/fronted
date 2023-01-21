import React, { FC } from 'react'
import style from './admin-table.module.scss'
import cn from 'classnames'
import { TypePropsHeaderTable } from './admin-table.inteface'

const HeadTable: FC<TypePropsHeaderTable> = ({ data }) => {
  return (
    <li className={cn(style.item, style.head)}>
      {data.map((el: any) => {
        return (
          <span key={el} className={cn('w-1/3')}>
            {el}
          </span>
        )
      })}
    </li>
  )
}

export default HeadTable
