import { useGlobalProps } from 'global-props/contexts/GlobalPropsContext';
import { GlobalProps } from 'global-props/GlobalProps';
import Catalog from 'ui/catalog/Catalog';
import style from './allPopularMovies.module.scss';

const allPopularMovies = ()=>{
    const { popularMovies } = useGlobalProps()
    return(
        <>
        {!!popularMovies && (
            <Catalog
              movies={popularMovies || []}
              title="Popular movies"
              description="Popular movies and series in excellent quality: legal, safe, without ads"
            />
          )}
          </>
    )
}
export const getStaticProps = GlobalProps.getStaticProps(async () => {
    return { props: {}, fallback: false }
  })
export default allPopularMovies;