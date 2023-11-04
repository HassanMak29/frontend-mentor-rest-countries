/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

export default createContext({
  filter: false,
  search: "",
  region: "all",
  filterFunc: (_value: React.SetStateAction<boolean>) => {},
  getSearchValue: (_value: string) => {},
  getRegion: (_value: string) => {},
});
