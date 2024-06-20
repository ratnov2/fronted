
import { movieApi } from "@/api/dataAPI";
import { GlobalProps } from "global-props/GlobalProps";
import { defaultGlobalPropsContextValue } from "../contexts/GlobalPropsContext";

export function extractGlobalProps(data: any): GlobalProps {
  if (!data) return defaultGlobalPropsContextValue;
  // Do it the correct way with type validation and default values
  return {
    popularMovies: data.popularMovies,
    actors:data.actors,
    genres:data.genres
  };

  // Or do it the lazy, error prone way if you trust your pageProps to have
    // the correct shape
    // return data as GlobalProps;
}