import { FC } from "react";
import Search from "ui/serch/Search";
import CustomSearch from "./ContanerSidebar/CustomSearch";
import PopularMovies from "./ContanerSidebar/PopularMovies";
import style from './rightSidebar.module.scss'
import { useReqRightSidebar } from "./ContanerSidebar/useReqRightSidebar";
import FavoriteMovies from "./ContanerSidebar/FavoritesMovies";

const RightSidebar:FC = ()=>{
   
    return(
       <div >
          <CustomSearch />
          <PopularMovies />
          <FavoriteMovies />
       </div>
    )
}
export default RightSidebar;