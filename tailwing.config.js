/** @type {import('tailwindcss').Config} */

import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-xs": { max: "427px" }, // <= 427px
        xs: "428px", // 26.75rem =>
        sm: "768px", // 48rem =>
        md: "1024px", // 64rem =>
        lg: "1280px", // 80rem =>
        xl: "1440px", // 90rem =>
        "2xl": "1920px", // 120rem =>
        "3xl": "2500px", // 156.25rem =>
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        code: ["Source Code Pro", "monospace"],
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
    },
  },
  plugins: [sveltekit(), tailwindcss()],
};
