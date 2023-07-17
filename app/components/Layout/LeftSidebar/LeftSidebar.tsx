import { FC } from 'react'
import style from './leftSidebar.module.scss'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { genresApi } from '@/api/dataAPI'
import MenuRender from './ContainerLeftComp/MenuRender'
import GenresRenderer from './ContainerLeftComp/GenresRenderer'
import AuthTable from './ContainerLeftComp/AuthTable'

const LeftSidebar: FC = () => {

  const data = useQuery(
    'get popular genres',
    () => genresApi.getAll()
  )

  return (
    <div className={style.leftMenu}>
      <Image src={logo} alt="" width={200} height={40}/>
      <MenuRender />
      <GenresRenderer data={data.data?.data}/>
      <AuthTable />
    </div>
  )
}

export default LeftSidebar
