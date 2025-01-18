/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        slide: "gradient-slide 5s linear infinite",
      },
      keyframes: {
        // "gradient-slide": {
        //     "0%": { "background-position": "0% 0%" },
        //     "50%": { "background-position": "50% 50%" },
        //     "100%": { "background-position": "100% 100%" },
        // },
        "gradient-slide": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      backgroundSize: {
        "gradient-size": "400% 400%",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
