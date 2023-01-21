import Link from 'next/link'
import React, { FC } from 'react'
import { navigationData } from '../admin.data'
import { INavigate } from '../admin.interface'
import style from './navigation.module.scss'
import cn from 'classnames'
import { isAsPath } from 'helpers/isAsPath'

const NavigationAdmin: FC = () => {
  return (
    <div className={cn(style.panel)}>
      {navigationData.item.map((element: INavigate) => (
        <div key={element.title} className={cn(style.item, isAsPath(element.link) && style.active)}>
          <Link href={element.link}>
            <p>{element.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default NavigationAdmin
