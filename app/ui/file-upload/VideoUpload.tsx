import translitFile from '@/utils/translitFile/translitFile'

import React, { FC, useState } from 'react'
import VideoPlayer from 'ui/video-player/VideoPlayer'
import cn from 'classnames'
import style from './file-upload.module.scss'
const VideoUpload: FC<any> = ({ onChange, value,classNameShare,classNameVideo }) => {
  const [value2, isValue] = useState<any>()
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isValue(e.target.files?.[0])

    if (e.target.files) {
      let blob = e.target.files[0].slice(0, e.target.files[0].size, 'image/png')
      let newFile = new File([blob], translitFile(e.target.files[0].name), {
        type: 'image/png',
      })
      return onChange(newFile)
    }
  }

  return (
    <div className={cn(style.share,classNameShare)}>
      <input
        type="file"
        className={style.input}
        onChange={(e) => onFileChange(e)}
      />
      <div className={cn(style.blockStyle,classNameVideo)}>
        {value2 && value && <VideoPlayer videoSource={URL.createObjectURL(value2)} slug={value.slug} />}
        {value && !value2 && <VideoPlayer videoSource={value} slug={value.slug}/>}
      </div>
    </div>
  )
}

export default VideoUpload