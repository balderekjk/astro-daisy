/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "lemonade",
      "dim",
      {
        custom: {
          primary: "#76b82a",
          secondary: "#9333ea",
          accent: "#ff6f00",
          neutral: "#d1c4e9",
          "base-100": "#fefeff",
          info: "#1d4ed8",
          success: "#4caf50",
          warning: "#fcd34d",
          error: "#d32f2f",
        },
      },
    ],
  },
};
