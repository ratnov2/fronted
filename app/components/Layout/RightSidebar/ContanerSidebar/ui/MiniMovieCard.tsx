import style from '../../RightSidebar.module.scss';
import Image from 'next/image';
import { IGenres } from '@/components/Layout/LeftSidebar/menu.interface';
import { FC } from 'react';
import Rating from 'ui/rating/Rating';
import Link from 'next/link';

const MiniMovieCard: FC<IMiniMovieCard> = ({ genres, id, poster, title, rating }) => {
  return (
    <Link
      href={`/movie/${id}`}
      className={style.item}
    >
      <Image width={60} height={150} alt="" src={poster} />
      <div>
        <span>
          <h3>{title}</h3>
          <div className={style.genres}>
            {genres.map((genre) => (
              <span>{genre.name}</span>
            ))}
          </div>
        </span>
        <Rating rating={rating} />
      </div>
    </Link>
  )
}

interface IMiniMovieCard {
  id: string,
  poster: string,
  title: string,
  genres: IGenres[],
  rating: number
}
export default MiniMovieCard;