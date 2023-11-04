import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../context/themeContext/useTheme";

export default function Nav() {
  const { darkTheme, changeTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between h-10 w-full md:py-8 md:px-10 py-6 px-6 bg-Elements">
      <h1 className="text-Text md:text-lg text-sm font-bold">
        Where in the world?
      </h1>
      <button
        className="text-Text md:text-sm text-xs flex items-center gap-1"
        onClick={changeTheme}
      >
        {darkTheme ? <MdDarkMode /> : <MdOutlineDarkMode />}
        {darkTheme ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
}
