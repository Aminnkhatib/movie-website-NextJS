import { LevelContext } from "@/context/search";
import { useContext } from "react";

function useSearch() {
  return useContext(LevelContext);
}

export default useSearch;
