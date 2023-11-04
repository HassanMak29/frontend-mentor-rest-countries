/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Elements: "hsl(var(--color-Elements) / <alpha-value>)",
        Background: "hsl(var(--color-Background) / <alpha-value>)",
        Text: "hsl(var(--color-Text) / <alpha-value>)",
        Input: "hsl(var(--color-Input) / <alpha-value>)",
        InputText: "hsl(var(--color-Input-text) / <alpha-value>)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
