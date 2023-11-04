import { Ring } from "@uiball/loaders";
import { useTheme } from "../context/themeContext/useTheme";

export default function Spinner() {
  const { darkTheme } = useTheme();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Ring
        size={40}
        lineWeight={5}
        speed={2}
        color={darkTheme ? "white" : "black"}
      />
    </div>
  );
}
