import { GlobalProps } from 'global-props/GlobalProps'
import { createContext, useContext, ReactNode } from 'react'

// Default value for global props
export const defaultGlobalPropsContextValue: GlobalProps = {
  popularMovies: [
    {
      _id: '1',
      actors: ['12'],
      bigPoster: 'https://i.postimg.cc/qMr13CNd/encanto-big.jpg',
      countOpened: 12,
      genres: [
        {
          _id: '1',
          description: '',
          icon: 'Md10K',
          name: '',
          slug: '',
        },
      ],
      poster: 'https://i.postimg.cc/qMr13CNd/encanto-big.jpg',
      rating: 2,
      slug: 'wq',
      title: '',
      videoUrl: '',
    },
  ],
  actors: [],
}

// Global props context
export const GlobalPropsContext = createContext<GlobalProps>(
  defaultGlobalPropsContextValue
)

// Global props context provider props
export interface GlobalPropsContextProviderProps {
  children?: ReactNode
  globalProps: GlobalProps
}

// Global props context provider
export function GlobalPropsContextProvider(
  props: GlobalPropsContextProviderProps
) {
  return (
    <GlobalPropsContext.Provider value={props.globalProps}>
      {props.children}
    </GlobalPropsContext.Provider>
  )
}

// Utility hook to access global props
export function useGlobalProps() {
  return useContext(GlobalPropsContext)
}
