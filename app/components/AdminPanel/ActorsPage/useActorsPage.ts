
import { actorsApi } from '@/api/dataAPI'
import { useDebounce } from '@/hooks/useDebounse'
import { useRouter } from 'next/router'
import  { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

const useActorsPage = () => {
  const [isSearching, setIsSearching] = useState(true)

  const [value, isValue] = useState('')

  const debouncedSearchTerm = useDebounce(value, 500)

  const { push } = useRouter()
  const allActors = useQuery('getActorsParams', () => actorsApi.getAll(value), {
    select: ({ data }) =>
      data.map((el) => ({
        _id: el._id,
        item: [el.name, String(el.countMovies)],
      })),
    enabled: isSearching,
    onSuccess: () => setIsSearching(false),
  })

  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === '') {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }, [debouncedSearchTerm])

  const actorDel = useMutation(
    'deleteActor',
    (_id: string) => actorsApi.delete(_id),
    {
      onSuccess: () => allActors.refetch(),
    }
  )

  const createActor = useMutation('createActor', () => actorsApi.create(), {
    onSuccess: (data: any) => push(`actor/edit/${data.data}`),
  })
  const createHandler = () => createActor.mutate()
  const deleteHandler = (_id:string) => actorDel.mutate(_id) 

  return { deleteHandler, allActors, createHandler, isValue, value }
}

export default useActorsPage