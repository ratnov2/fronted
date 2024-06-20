import StarRatings from 'react-star-ratings'
import style from './movie-page.module.scss'
import { FC, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { movieApi, ratingApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'

export interface TypesRatingMovie {
  _id: string
  movieRating: number
}

const RatingMovie: FC<TypesRatingMovie> = ({ _id, movieRating }) => {
  const { query } = useRouter()

  const [rating, setRating] = useState(movieRating)
  const [toastThank, setToast] = useState(false)

  const queryClient = useQueryClient()

  const setRatingMovie = useMutation(
    'setRating',
    (rating: number) => ratingApi.post(_id, rating),
    {
      onSuccess: () => {
        setTimeout(() => {
          setToast(false)
        }, 2400)
        queryClient.invalidateQueries(String(query.movie))
       // queryClient.invalidateQueries('favorite_movies')
      },
    }
  )

  const setRatingStar = (e: number) => {
    setRating(e)
    setToast(true)
    setRatingMovie.mutate(e)
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
