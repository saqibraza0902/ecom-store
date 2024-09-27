import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBF8F3",
        secondary: "#E5E7E7",
        secondary_A: "#EEECE8",
        tertiory: "#afffe4",
      },
      fontFamily: {
        Raleway: ["var(--font-raleway)"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
export default config;
