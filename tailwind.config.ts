import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#78bf0f",

          secondary: "#f9e5bb",

          accent: "#ffbfca",

          neutral: "#292b38",

          "base-100": "#f3f6f4",

          info: "#5f8fce",

          success: "#35e9bc",

          warning: "#f58514",

          error: "#f93e47",
          body:{
            "background-color":"#bcbcbc"
          }
        },
      },
    ],
  },
};
export default config;
