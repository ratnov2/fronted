import { useAuthState } from '@/hooks/useAuthState'
import { useRouter } from 'next/router'
import { FC } from 'react'

//import { useAuth } from '@/hooks/useAuth'

//import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckRole: FC<any> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser },
}) => {
  const { user } = useAuthState()

  const { pathname, replace } = useRouter()

  const Children = () => <>{children}</>

  if (!isOnlyAdmin && !isOnlyUser) return <Children />

  if (user?.isAdmin) return <Children />

  if (isOnlyAdmin) {
    pathname !== '/404' && replace('/404')
    return null
  }

  const isUser = user && !user.isAdmin

  if (isUser && isOnlyUser) return <Children />
  else {
    pathname !== '/auth' && replace('/auth')
    return null
  }
}

export default CheckRole
