import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeContextProvider from "./context/themeContext/ThemeContextProvider.tsx";
import SearchFilterProvider from "./context/searchFilterContext/SearchFilterProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <SearchFilterProvider>
          <App />
        </SearchFilterProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
