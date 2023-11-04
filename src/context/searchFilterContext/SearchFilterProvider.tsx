import { ReactNode, useState } from "react";
import SearchFilterContext from "./searchFilterContext";

export default function SearchFilterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filterFunc = (value: React.SetStateAction<boolean>) => {
    setFilter(value);
  };

  const getSearchValue = (value: string) => {
    setSearch(value);
  };
  const getRegion = (value: string) => {
    setRegion(value);
  };

  const values = {
    filter,
    filterFunc,
    search,
    getSearchValue,
    region,
    getRegion,
  };

  return (
    <SearchFilterContext.Provider value={values}>
      {children}
    </SearchFilterContext.Provider>
  );
}
