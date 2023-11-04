import { useContext } from "react";
import countriesContext from "./countriesContext";

export const useCountries = () => {
  const context = useContext(countriesContext);
  if (!context) throw new Error("The context was used outside its provider");
  return context;
};
