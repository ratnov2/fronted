import { IItemNavigate } from "./admin.interface";

export const navigationData:IItemNavigate = {
  item:[
    {
      title:'Statistics',
      link:'/manage/statistics'
    },
    {
      title:'Users',
      link:'/manage/users'
    },
    {
      title:'Movies',
      link:'/manage/movies'
    },
    {
      title:'Actors',
      link:'/manage/actors'
    },
    {
      title:'Genres',
      link:'/manage/genres'
    }
  ]
}

export const itemHeadTableUser = ['Email', 'Date register', 'Actions']
export const itemActorsDataTable = ['Name','Counted movies','Actions']
export const itemGenresDataTable = ['Name','Slug','Actions']
export const itemMoviesDataMovie = ['Title', 'Genres', 'Rating', 'Actions']
