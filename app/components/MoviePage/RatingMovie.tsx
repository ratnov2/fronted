import StarRatings from 'react-star-ratings'
import style from './movie-page.module.scss'
import { FC, useState } from 'react'
import { useMutation } from 'react-query'
import { ratingApi } from '@/api/dataAPI'

export interface TypesRatingMovie {
  _id: string
  movieRating: number
}

const RatingMovie: FC<TypesRatingMovie> = ({ _id, movieRating }) => {
  const [rating, setRating] = useState(movieRating)
  const [toastThank, setToast] = useState(false)

  const setRatingMovie = useMutation(
    'setRating',
    () => ratingApi.post(_id, rating),
    {
      onSuccess: () => {
        setToast(true)
        setTimeout(() => {
          setToast(false)
        }, 2400)
      },
    }
  )

  const setRatingStar = (e: number) => {
    setRating(e)
    setToast(true)
    setRatingMovie.mutate()
  }

  return (
    <div className={style.rating}>
      <h1>How do you like this movie?</h1>
      <p>Rating improve recommendations!</p>
      <div>
        {!toastThank ? (
          <StarRatings
            rating={rating}
            starRatedColor="yellow"
            changeRating={setRatingStar}
            numberOfStars={5}
            starDimension="25px"
            name="rating"
          />
        ) : (
          <>
            <span className={style.thanks}>Thanks for rating!</span>
          </>
        )}
      </div>
    </div>
  )
}

export default RatingMovie
