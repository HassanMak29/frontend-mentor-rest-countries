import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { useTheme } from "./context/themeContext/useTheme";
import Nav from "./components/Nav";

function App() {
  const { darkTheme } = useTheme();

  return (
    <main
      className={`${darkTheme ? "dark" : ""} h-full min-h-screen bg-Background`}
    >
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryCode" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
