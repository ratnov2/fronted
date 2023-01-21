import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../Layout/Layout'
import { Provider } from 'react-redux'
import store from '@/store/store'
import ReduxToastr from 'react-redux-toastr'
import ReduxToastrCus from 'ui/redux-toastr/ReduxToastr'
import AuthProvider from './AuthProvider/AuthProvider'

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider: FC<{ children: React.ReactNode; Component: TypeRoles }> = ({
  children,
  Component,
}) => {
  
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToastrCus />
          <AuthProvider Component={Component}>
            <Layout>{children}</Layout>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
export default MainProvider
