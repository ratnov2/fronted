import { fetchGlobalProps, GlobalProps } from 'global-props/GlobalProps'
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetStaticProps,
} from 'next'

export function getStaticPropsWithGlobalProps<T extends {}>(
  getStaticProps: (
    ctx: GetStaticPropsContext,
    globalProps: GlobalProps
  ) => Promise<GetStaticPropsResult<T>>
): GetStaticProps<T & GlobalProps> {
  // Construct getStaticProps function
  return async (ctx: GetStaticPropsContext) => {
    // Fetch global props
    const globalProps = await fetchGlobalProps()

    // Run getStaticProps with user defined getStaticProps, provide context
    // and global props
    const result = await getStaticProps(ctx, globalProps)

    // If redirect or notFound in result, return result as is, in this case
    // no page props will be provided
    if ('redirect' in result || 'notFound' in result) {
      return result
    }

    // Return combined page props and global props as page props
    return {
      props: {
        ...result.props,
        ...globalProps,
      },
      revalidate: result.revalidate,
    }
  }
}
