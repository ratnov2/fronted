import { FC } from 'react'
import style from './leftSidebar.module.scss'
import Image from 'next/image'
import MenuRender from './ContainerLeftComp/MenuRender'
import GenresRenderer from './ContainerLeftComp/GenresRenderer'
import AuthTable from './ContainerLeftComp/AuthTable'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'

const LeftSidebar: FC = () => {
  const { genres } = useGlobalProps()

  return (
    <div className={style.leftMenu}>
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={200}
        height={40}
        priority
      />
      <MenuRender />
      <GenresRenderer genres={genres} />
      <AuthTable />
    </div>
  )
}
export default LeftSidebar
