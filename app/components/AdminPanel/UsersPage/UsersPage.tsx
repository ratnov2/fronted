import { usersApi, actorsApi, genresApi } from '@/api/dataAPI'
import { dateNormalize } from '@/utils/dateNormalize/dateNormalize'
import React, { FC } from 'react'
import { useMutation, useQuery } from 'react-query'
import TableSearchCreate from 'ui/table-search-create/TableSearchCreate'
import { itemHeadTableUser } from '../admin.data'
import HeadTable from '../../../ui/admin-table/HeadTable'
import Table from '../../../ui/admin-table/Table'
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin'
import UsersSearch from './UsersSearch'
import { useUsersPage } from './useUsersPage'

const UsersPage: FC = () => {
  const { allUsers, deleteUserFun, value, isValue } = useUsersPage()

  return (
    <>
      <NavigationAdmin />
      <div className="animate-fade">
        <UsersSearch value={value} isValue={isValue} title="Movies" />
        <HeadTable data={itemHeadTableUser} />
        <Table
          data={allUsers.data}
          isLoading={allUsers.isLoading}
          removeHandler={deleteUserFun}
          edit="user"
        />
      </div>
    </>
  )
}

export default UsersPage
