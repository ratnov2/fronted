import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthState } from './useAuthState'

export const useAuthRedirect = () => {
  const { user } = useAuthState()
  const { query } = useRouter()
  const router = useRouter()
  console.log(query)

  useEffect(() => {
    if (user) router.push(`${query?.redirect || '/'}`)
  }, [user])
  return {}
}
