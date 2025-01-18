/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bubbles: "bubbles 5s linear infinite",
      },
      keyframes: {
        bubbles: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-66.666%)" },
        },
      },
    },
  },
  plugins: [],
};
