
export const dateNormalize = (date:any)=>{
  const newDate = new Date(date)

  return `${newDate.getDay()}.${newDate.getMonth()}.${newDate.getFullYear()}`
}