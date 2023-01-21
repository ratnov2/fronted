
import React, { FC } from 'react'
import MaterialIcon from 'ui/MaterialIcon'
import cn from 'classnames'
import style from './rating.module.scss'

const Rating:FC<{rating:number,className?:string}> = ({rating ,className}) => {

  return (
    <div className={cn(style.rating,className)}>
      <MaterialIcon name='MdStar'/>
      <p>{rating}</p>
    </div>
  )
}

export default Rating