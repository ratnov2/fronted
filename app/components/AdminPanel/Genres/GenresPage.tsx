import React, { FC } from 'react'
import TableSearchCreate from 'ui/table-search-create/TableSearchCreate'
import { itemGenresDataTable } from '../admin.data'
import HeadTable from '../../../ui/admin-table/HeadTable'
import Table from '../../../ui/admin-table/Table'
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin'
import { useGenresPage } from './useGenresPage'

const GenresPage: FC = () => {
  const { deleteHandler, allGenres, isValue, value, createHandler } =
    useGenresPage()

  return (
    <div>
      <NavigationAdmin />
      <div className="animate-fade">
        <TableSearchCreate
          value={value}
          isValue={isValue}
          createHandler={createHandler}
          title="Genres"
        />
        <HeadTable data={itemGenresDataTable} />
        <Table
          data={allGenres.data}
          isLoading={allGenres.isLoading}
          removeHandler={deleteHandler}
          edit="genre"
        />
      </div>
    </div>
  )
}

export default GenresPage
