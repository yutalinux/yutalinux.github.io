/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        15: "60px",
      },
      colors: {
        menubar: "#333333",
      },
      boxShadow: {
        "menubar-shadow": "0 4 10 0 #00000040",
      },
    },
  },
  plugins: [],
};

128;
