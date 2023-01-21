import { usersApi } from '@/api/dataAPI'
import { useDebounce } from '@/hooks/useDebounse'
import { dateNormalize } from '@/utils/dateNormalize/dateNormalize'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useUsersPage = () => {


  const [isSearching, setIsSearching] = useState(true)
  const [value, isValue] = useState('')

  const debouncedSearchTerm = useDebounce(value, 500)


  const allUsers = useQuery('getAllUsers', () => usersApi.getUsers(value), {
    select: ({ data }) =>
      data.map((el) => ({
        _id: el._id,
        item: [el.email, dateNormalize(el.createdAt)],
      })),
      enabled: isSearching,
      onSuccess: () => setIsSearching(false),
  })

  const userDel = useMutation(
    'deleteUser',
    (_id: string) => usersApi.deleteUser(_id),
    {
      onSuccess: () => allUsers.refetch(),
    }
  )
  const deleteUserFun = (_id: string) => {
    userDel.mutate(_id)
  }
  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === '') {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }, [debouncedSearchTerm])

  return { allUsers, deleteUserFun, value, isValue}
}
