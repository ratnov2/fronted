
import React, { FC } from 'react'
import Button from 'ui/form-ui/button/Button'
import HeaderAdmin from 'ui/header-admin/HeaderAdmin'
import Search from 'ui/serch/Search'
import { TypesTableSearchCreate } from './table-search-create.interface'
import style from './table-search-create.module.scss'

const TableSearchCreate:FC<TypesTableSearchCreate> = ({value,title, isValue, createHandler}) => {
  return (
    <>
    <HeaderAdmin title={title}/>
        <div className={style.header}>
          <Search value={value} isValue={isValue} />
          <div>
            <Button onClick={()=>createHandler()}>create new</Button>
          </div>
        </div>
    </>
  )
}

export default TableSearchCreate