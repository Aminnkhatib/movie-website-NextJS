import { LevelContext } from "@/context/search";
import { useContext } from "react";

export function useSearch() {
  return useContext(LevelContext);
}

