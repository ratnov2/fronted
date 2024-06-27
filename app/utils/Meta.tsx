import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import logoImage from '@/assets/title2.svg'

import { siteName, titleMerge } from '@/api/config/seo.config'
import { ISeo } from './meta.interface'
import { onlyText } from './string/clearText'

export const Meta: FC<ISeo> = ({
  title,
  description,
  image = null,
  children,
}) => {
  const { asPath } = useRouter()
  const currentUrl = `http://localhost:4200/${asPath}`

  return (
    <>
      {description ? (
        <Head>
          <title itemProp="headline">{titleMerge(title)}</title>
          <meta
            itemProp="description"
            name="description"
            content={onlyText(description, 152)}
          />
         
          <link rel="canonical" href={currentUrl} />
          <meta property="og:locale" content="en" />
          <meta property="og:title" content={titleMerge(title)} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:image" content={image || logoImage} />
          <meta property="og:site_name" content={siteName} />
          <meta
            property="og:description"
            content={onlyText(description, 197)}
          />
        </Head>
      ) : (
        <meta></meta>
      )}
      {children}
    </>
  )
}
