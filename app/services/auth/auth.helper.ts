import Cookies from 'js-cookie'

export const saveTokensStorage = (data:any)=>{
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data:any)=>{
  console.log(data);
  
  saveTokensStorage(data)
  localStorage.setItem('user',JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}