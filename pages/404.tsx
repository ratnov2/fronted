import { Meta } from '@/utils/Meta'
import { GlobalProps } from 'global-props/GlobalProps'
import { FC } from 'react'

const Page404: FC = () => {
  return (
    <Meta title="Page not found">
      <header>Page not found</header>
    </Meta>
  )
}

export const getStaticProps = GlobalProps.getStaticProps(async () => {
    return { props: {}, revalidate: +String(process.env.NEXT_PUBLIC_REVALIDATE) }
})
export default Page404
