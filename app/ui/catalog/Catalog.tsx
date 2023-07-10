import { FC } from 'react'


// import Description from '@/components/ui/heading/Description'
// import Heading from '@/components/ui/heading/Heading'

// import { Meta } from '@/utils/meta'

import { getMovieUrl } from '@/configs/url.config'

import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.types'
import GalleryItem from 'ui/gallery/GalleryItem'
import { Meta } from '@/utils/Meta'
import Heading from 'ui/heading/Heading'
import Description from 'ui/heading/Description'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}
			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							posterPath: movie.bigPoster,
							url: getMovieUrl(movie._id),
							content: {
								title: movie.title,
							},
						}}
					/>
				))}
			</section>
		</Meta>
	)
}

export default Catalog
