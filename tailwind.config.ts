import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#161616",
          secondary: "#5C5C5C",
          accent: "#FFA900",
          neutral: "#DFDFE5",
          "base-100": "#ffffff",
          info: "#9A9CB0",
          success: "#24BF33",
          warning: "#F0950C",
          error: "#BB1D1D",
          white: "#ffffff",
          body: {
            "background-color": "#ffffff",
          },
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
