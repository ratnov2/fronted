
import React, { Dispatch, FC, SetStateAction } from 'react'
import HeaderAdmin from 'ui/header-admin/HeaderAdmin'
import Search from 'ui/serch/Search'
import style from'ui/table-search-create/table-search-create.module.scss'

interface TypesUsersSearch {
  title:string,
  value:string,
  isValue:Dispatch<SetStateAction<string>>
}

const UsersSearch:FC<TypesUsersSearch> = ({title,value,isValue}) => {
  return (
    <div>
      <HeaderAdmin title={title}/>
        <div className={style.header}>
          <Search value={value} isValue={isValue} />
        </div>
    </div>
  )
}

export default UsersSearch