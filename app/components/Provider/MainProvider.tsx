import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../Layout/Layout'
import { Provider } from 'react-redux'
import store from '@/store/store'
import ReduxToastrCus from 'ui/redux-toastr/ReduxToastr'
import AuthProvider from './AuthProvider/AuthProvider'
import RouterAndFirstLoading from 'ui/router-and-first-loading/RouterAndFirstLoading'
import { GlobalPropsContextProvider } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import { AppProps } from 'next/app'
import ReduxToastr from 'react-redux-toastr'

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider: FC<{
  children: React.ReactNode
  Component: TypeRoles
  pageProps: AppProps
}> = ({ children, Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToastrCus />
          <AuthProvider Component={Component}>
            <RouterAndFirstLoading />
            <GlobalPropsContextProvider
              globalProps={GlobalProps.extract(pageProps)}
            >
              {children}
            </GlobalPropsContextProvider>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
export default MainProvider
