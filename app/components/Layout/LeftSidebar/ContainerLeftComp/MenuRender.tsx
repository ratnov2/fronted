import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from 'ui/MaterialIcon'
import style from '../leftSidebar.module.scss'
import { menuData } from '../menu.data'
import { IMenuItem } from '../menu.interface'
import cn from 'classnames'
import { useRouter } from 'next/router'

const MenuRender: FC = () => {
  const { asPath } = useRouter()

  return (
    <div className={cn(style.menuStyle)}>
      <h3>{menuData.name}</h3>
      {menuData.item.map((element: IMenuItem) => {
        return (
          <Link
            key={element.link}
            href={element.link}
            className={cn(asPath === element.link && style.active)}
          >
            <figure className={style.figureMenu}>
              <MaterialIcon name={element.icon} />
              <p>{element.title}</p>
            </figure>
          </Link>
        )
      })}
    </div>
  )
}

export default MenuRender
