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
  return { props: {}, fallback: false }
})
export default Page404
