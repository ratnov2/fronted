import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../Layout/Layout'
import { Provider } from 'react-redux'
import store from '@/store/store'
import ReduxToastrCus from 'ui/redux-toastr/ReduxToastr'
import AuthProvider from './AuthProvider/AuthProvider'
import RouterAndFirstLoading from 'ui/router-and-first-loading/RouterAndFirstLoading'

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
          <RouterAndFirstLoading />
            <Layout>{children}</Layout>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
export default MainProvider
