import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../context/themeContext/useTheme";

export default function Nav() {
  const { darkTheme, changeTheme } = useTheme();

  return (
    <nav className="flex h-10 w-full items-center justify-between bg-Elements px-6 py-6 md:px-10 md:py-8">
      <h1 className="text-sm font-bold text-Text md:text-lg">
        Where in the world?
      </h1>
      <button
        className="flex items-center gap-1 text-xs text-Text md:text-sm"
        onClick={changeTheme}
      >
        {darkTheme ? <MdDarkMode /> : <MdOutlineDarkMode />}
        {darkTheme ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
}
