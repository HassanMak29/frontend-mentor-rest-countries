import { useContext } from "react";
import searchFilterContext from "./searchFilterContext";

export const useSearchFilter = () => {
  const context = useContext(searchFilterContext);
  if (!context) throw new Error("The context was used outside its provider");
  return context;
};
