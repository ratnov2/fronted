

import React, { FC } from 'react'
import { TypesHeaderAdmin } from './header-admin.interface'

const HeaderAdmin:FC<TypesHeaderAdmin> = ({title}) => {
  return (
    <div className='my-6 text-2xl'>{title}</div>
  )
}

export default HeaderAdmin