// import { fileApi } from '@/api/dataAPI'
// import translitFile from '@/utils/translitFile/translitFile'
// import React, { FC, useState } from 'react'
// import { useMutation } from 'react-query'
// import Button from 'ui/form-ui/button/Button'
// import style from './file-upload.module.scss'

// const FileUpload: FC<any> = ({ onChange, value }) => {
//   const [value2, isValue] = useState<any>()
//   const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     isValue(e.target.files?.[0])

//     if (e.target.files) {
//       let blob = e.target.files[0].slice(0, e.target.files[0].size, 'image/png')
//       let newFile = new File([blob], translitFile(e.target.files[0].name), {
//         type: 'image/png',
//       })
//       return onChange(newFile)
//     }
//   }

//   return (
//     <div className={style.share}>
//       <input
//         type="file"
//         className={style.input}
//         onChange={(e) => onFileChange(e)}
//       />
//       <div className={style.blockStyle}>
//         {value2 && value && <img src={URL.createObjectURL(value2)} alt="" />}
//         {value && !value2 && <img src={value} alt="" />}
//       </div>
//     </div>
//   )
// }

// export default FileUpload
