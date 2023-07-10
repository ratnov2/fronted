import { fileApi, movieApi } from '@/api/dataAPI'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { IInputMovie } from './movie-edit.interface'

export const useReqEditMovie = (id: string) => {
  const { push } = useRouter()

  const { mutate } = useMutation(
    'putMovies',
    (data: any) => movieApi.put(data),
    {
      onSuccess: () => {
        push('../../movies')
      },
    }
  )

  const onSubmit = async (dataLog: IInputMovie) => {
    const loadFilesArray: {
      file: Blob | string
      name: 'bigPoster' | 'poster' | 'videoUrl'
    }[] = [
      { file: dataLog.bigPoster, name: 'bigPoster' },
      { file: dataLog.poster, name: 'poster' },
      { file: dataLog.videoUrl, name: 'videoUrl' },
    ]

    let datePromise: any = []
    loadFilesArray.map((el) => {
      if (typeof el.file !== 'string' && el.file) {
        const formData = new FormData()
        formData.append('image', el.file)
        datePromise.push(
          fileApi
            .post(formData)
            .then((data) => (dataLog[el.name] = data.data[0].url))
        )
      }
    })
    Promise.all(datePromise).then(function () {
      mutate({ ...dataLog, _id: id, description: '', isSendTelegram: true })
    })
  }
  return { onSubmit }
}
