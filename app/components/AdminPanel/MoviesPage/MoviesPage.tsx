import React, { FC } from 'react'
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin'
import HeadTable from '../../../ui/admin-table/HeadTable'

import Table from '../../../ui/admin-table/Table'
import { itemMoviesDataMovie } from '../admin.data'
import { useMoviesPage } from './useMoviePage'
import TableSearchCreate from 'ui/table-search-create/TableSearchCreate'
const MoviesPage: FC = () => {
  const { allMovies, deleteHandler, value, isValue, createHandler } =
    useMoviesPage()

  return (
    <div>
      <ul>
        <NavigationAdmin />
        <div className="animate-fade">
          <TableSearchCreate
            value={value}
            isValue={isValue}
            createHandler={createHandler}
            title="Movies"
          />
          <HeadTable data={itemMoviesDataMovie} />
          <Table
            data={allMovies.data}
            isLoading={allMovies.isLoading}
            removeHandler={(_id) => deleteHandler(_id)}
            edit="movie"
          />
        </div>
      </ul>
    </div>
  )
}

export default MoviesPage
