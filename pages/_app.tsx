import '../styles/globals.css'//
import type { AppProps } from 'next/app'
import '../app/assets/styles/react-select.scss'
import MainProvider, { TypeRoles } from '@/components/Provider/MainProvider'

export interface TypeComponentAuthFields{
  Component:TypeRoles
}
type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
  return <MainProvider Component={Component}>
          <Component {...pageProps} />
         </MainProvider>
}