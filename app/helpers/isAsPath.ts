import { useRouter } from "next/router"

export const isAsPath = (path:string)=>{
  const {asPath} = useRouter()
 
  return asPath === path

}