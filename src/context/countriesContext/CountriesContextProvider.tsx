// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { ReactNode, useMemo } from "react";
// import { Country } from "../../types";
// import { useSearchFilter } from "../searchFilterContext/useSearchFilter";
// import CountriesContext from "./countriesContext";

// export default function CountriesContextProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const values = {
//     loading: isPending,
//     regions,
//     countries: filteredCountries ?? [],
//   };

//   return (
//     <CountriesContext.Provider value={values}>
//       {children}
//     </CountriesContext.Provider>
//   );
// }
