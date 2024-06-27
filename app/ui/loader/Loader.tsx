import Image from 'next/image'
import style from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className="w-full h-full bg-gray-800">
      <div className="w-full h-full flex justify-center items-center">
        <div className={style.loading}></div>
        <h1 className="font-bold text-3xl tracking-widest">FACinema</h1>
        <div className={style.loading}></div>
      </div>
    </div>
  )
}
