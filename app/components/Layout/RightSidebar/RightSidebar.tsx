import { FC } from "react";
import Search from "ui/serch/Search";
import CustomSearch from "./ContanerSidebar/CustomSearch";
import PopularMovies from "./ContanerSidebar/PopularMovies";
import { useReqRightSidebar } from "./ContanerSidebar/useReqRightSidebar";
import FavoriteMovies from "./ContanerSidebar/FavoritesMovies";
import { useAuthState } from "@/hooks/useAuthState";
import { GlobalProps } from "global-props/GlobalProps";

const RightSidebar:FC = ()=>{
   const { user } = useAuthState()
    return(
       <div >
          <CustomSearch />
          <PopularMovies />
          {user && <FavoriteMovies />}
       </div>
    )
}

export default RightSidebar;