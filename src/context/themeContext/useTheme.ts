import { useContext } from "react";
import themeContext from "./themeContext";

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error("The context was used outside its provider");
  return context;
};
