import { FC } from 'react'
import style from './leftSidebar.module.scss'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { genresApi } from '@/api/dataAPI'
import MenuRender from './ContainerLeftComp/MenuRender'
import GenresRenderer from './ContainerLeftComp/GenresRenderer'
import AuthTable from './ContainerLeftComp/AuthTable'
import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext'

const LeftSidebar: FC = () => {
  const { genres } = useGlobalProps()

  return (
    <div className={style.leftMenu}>
      <Image src={logo} alt="" width={200} height={40} />
      <MenuRender />
      <GenresRenderer genres={genres} />
      <AuthTable />
    </div>
  )
}
export default LeftSidebar
