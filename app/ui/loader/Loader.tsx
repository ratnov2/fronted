import logo from '@/assets/logo.png'
import Image from 'next/image'
import style from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className="w-full h-full bg-gray-800">
      <div className="w-full h-full flex justify-center items-center">
        <div className={style.loading}></div>
        <Image src={logo} alt="logo" width={200} height={40} />
        <div className={style.loading}></div>
      </div>
    </div>
  )
}
