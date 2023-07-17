import { IMenu, IMenuGeneral } from "./menu.interface";



export const menuData:IMenu  = {
  name: 'Menu',
  item :[{
    icon:'MdHome',
    link: '/',
    title: 'Home'
  },
  {
    icon:'MdExplore',
    link: '/genres',
    title: 'Discovery'
  },
  {
    icon:'MdRefresh',
    link: '/freshMovies',
    title: 'Fresh Movies'
  },
  {
    icon:'MdLocalFireDepartment',
    link: '/trendMovies',
    title: 'Trending now'
  },
]}
 
export const authData:IMenuGeneral = {
  name:'General',
  item:[{
    icon:'MdRefresh',
    link:'/',
    title:'Logout'
  }
],
  admin:{
    icon:'MdRefresh',
    link:'/manage/statistics',
    title:'Admin Panel'
  },
  login:{
    icon:'MdRefresh',
    link:'/auth',
    title:'Login'
  },
} 