import React, { FC } from 'react'
import Button from 'ui/form-ui/button/Button'
import Search from 'ui/serch/Search'
import TableSearchCreate from 'ui/table-search-create/TableSearchCreate'
import { itemActorsDataTable } from '../admin.data'
import HeadTable from '../../../ui/admin-table/HeadTable'
import Table from '../../../ui/admin-table/Table'
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin'
import useActorsPage from './useActorsPage'

const ActorsPage: FC = () => {
  const { deleteHandler, allActors, createHandler, isValue, value } =
    useActorsPage()

  return (
    <div>
      <div>
        <NavigationAdmin />
        <div className="animate-fade">
          <TableSearchCreate
            value={value}
            isValue={isValue}
            createHandler={createHandler}
            title="Actors"
          />
          <HeadTable data={itemActorsDataTable} />
          <Table
            data={allActors.data}
            isLoading={allActors.isLoading}
            removeHandler={deleteHandler}
            edit="actor"
          />
        </div>
      </div>
    </div>
  )
}

export default ActorsPage
