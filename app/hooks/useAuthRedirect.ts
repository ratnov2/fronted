import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthState } from "./useAuthState"


export const useAuthRedirect = ()=>{
  const {user} = useAuthState()

  const router = useRouter()
  
  useEffect(()=>{
    if(user) router.push('/')
  },[user])
  return {}
}