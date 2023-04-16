import { createContext, Dispatch, SetStateAction } from "react";

type Search = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const LevelContext = createContext<Search>({} as Search);
