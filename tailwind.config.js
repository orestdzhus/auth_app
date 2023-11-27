import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.violet[600],
          hover: colors.violet[700],
          border: colors.violet[400],
          text: colors.gray[400],
        },
        secondary2: {
          DEFAULT: "#5e5e5f",
          hover: "#413f3f",
          active: "#4e4c4c",
        },
        customDark: {
          DEFAULT: colors.slate[700],
        },
        customBackground: {
          DEFAULT: "#1e1f22",
          hover: "1E1F22FF",
        },
      },
    },
  },
  plugins: [],
};
