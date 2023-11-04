/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

export default createContext({
  loading: false,
  regions: [""],
  countries: [
    {
      name: { common: "", official: "" },
      area: 0,
      population: 0,
      region: "",
      capital: [""],
      flags: { png: "", svg: "" },
    },
  ],
});
