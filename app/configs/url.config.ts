export const getMovieUrl = (url: string) => `/movie/${url}`
export const getMoviesUrl = (url:string) =>  `/movies/${url}`
export const getGenreUrl = (slug: string) => `/genre/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`
export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
