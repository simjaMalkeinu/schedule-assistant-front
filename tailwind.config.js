/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-bg": "url('/src/assets/bg-login.svg')",
        "img-person": "url('/src/assets/person-login.svg')",
      },
      boxShadow: {
        custom: "0px 4px 12px 10px rgba(255, 255, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
