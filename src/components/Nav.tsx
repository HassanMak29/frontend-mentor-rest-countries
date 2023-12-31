import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../context/themeContext/useTheme";
import { Link } from "react-router-dom";

export default function Nav() {
  const { darkTheme, changeTheme } = useTheme();

  return (
    <nav className="flex h-10 w-full items-center justify-between bg-Elements px-6 py-6 md:px-10 md:py-8">
      <Link to="/" className="text-sm font-bold text-Text md:text-lg">
        Where in the world?
      </Link>
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
