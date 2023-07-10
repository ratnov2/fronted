import React, { FC } from 'react'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import style from './layout.module.scss'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={style.layout}>
      <LeftSidebar />
      <div className={style.center}>{children}</div>
      <RightSidebar />
    </div>
  )
}
export default Layout
