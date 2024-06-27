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
import NextTopLoader from 'nextjs-toploader'

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
          {process.env.NEXT_PUBLIC_IS_PROD === 'true' && <RouterAndFirstLoading />}
          <AuthProvider Component={Component}>
            <GlobalPropsContextProvider
              globalProps={GlobalProps.extract(pageProps)}
            >
              <NextTopLoader showSpinner={false} color="#ff0009" />
              <Layout>{children}</Layout>
            </GlobalPropsContextProvider>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
  return { props: {} }
})

export default MainProvider
