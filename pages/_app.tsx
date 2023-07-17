import '../styles/globals.css' //
import '../app/assets/styles/react-select.scss'
import type { AppProps } from 'next/app'
import '../app/assets/styles/react-select.scss'
import MainProvider, { TypeRoles } from '@/components/Provider/MainProvider'
import { GlobalPropsContextProvider } from 'global-props/contexts/GlobalPropsContext'
import { GlobalProps } from 'global-props/GlobalProps'
import Layout from '@/components/Layout/Layout'

export interface TypeComponentAuthFields {
  Component: TypeRoles
  children: any
}
type TypeAppProps = AppProps & TypeComponentAuthFields & AppProps

export default function App({ Component, pageProps, children }: TypeAppProps) {
  return (
    <MainProvider Component={Component}>
      <GlobalPropsContextProvider globalProps={GlobalProps.extract(pageProps)}>
          <Layout><Component {...pageProps} /></Layout>
      </GlobalPropsContextProvider>
    </MainProvider>
  )
}
