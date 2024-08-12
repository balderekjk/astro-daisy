/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#76b82a",
          secondary: "#9333ea",
          accent: "#ff6f00",
          neutral: "#c0c0c0",
          "base-100": "#fefeff",
          info: "#1d4ed8",
          success: "#4caf50",
          warning: "#fcd34d",
          error: "#d32f2f",
          "--opposite": "#15181e",
        },
      },
      {
        dim: {
          ...require("daisyui/src/theming/themes")["dim"],
          "--b1": "20.85% 0.013 264.24",
          "--opposite": "#fefeff",
        },
      },
    ],
  },
  darkMode: ["class", 'html[data-theme="dim"]'],
};
