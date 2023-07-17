import React, { FC } from 'react'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import style from './layout.module.scss'
import { GlobalProps } from 'global-props/GlobalProps'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const {popularMovies} = useGlobalProps()

  return (
    <div className={style.layout}>
      <LeftSidebar />
      <div className={style.center}>{children}</div>
      <RightSidebar />
    </div>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {},fallback: false }
})
export default Layout
