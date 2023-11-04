import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./themeContext";

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const dark = localStorage.getItem("dark");
    if (dark) {
      return JSON.parse(dark) as boolean;
    }
    return false;
  });

  const changeTheme = () => {
    setDarkTheme((darkTheme) => !darkTheme);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
