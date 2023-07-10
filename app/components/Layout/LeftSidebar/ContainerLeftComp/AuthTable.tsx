import { useAuthState } from '@/hooks/useAuthState'
import Link from 'next/link'
import React from 'react'
import { authData } from '../menu.data'
import style from '../leftSidebar.module.scss'
import MaterialIcon from 'ui/MaterialIcon'
import { IMenuItem } from '../menu.interface'
import { useActions } from '@/hooks/useActions'

const AuthTable = () => {
  const { user } = useAuthState()
  const { logoutAction } = useActions()

  return (
    <div className={style.menuStyle}>
      <h3>{authData.name}</h3>
      {user ? (
        <div>
          {authData.item.map((item: IMenuItem) => (
            <Link key={item.link} href={'/'}>
              <figure className={style.figureMenu}>
                <MaterialIcon name={item.icon} />
                <p>{item.title}</p>
              </figure>
            </Link>
          ))}
        </div>
      ) : (
        <div>
          <Link href={authData.login.link} onClick={() => logoutAction()}>
            <figure className={style.figureMenu}>
              <MaterialIcon name={authData.login.icon} />
              <p>{authData.login.title}</p>
            </figure>
          </Link>
        </div>
      )}
      {user?.isAdmin && (
        <div>
          <Link href={authData.admin.link}>
            <figure className={style.figureMenu}>
              <MaterialIcon name={authData.admin.icon} />
              <p>{authData.admin.title}</p>
            </figure>
          </Link>
        </div>
      )}
    </div>
  )
}
export default AuthTable
