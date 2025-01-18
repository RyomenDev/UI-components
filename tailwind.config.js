/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        slide: "gradient-slide 5s linear infinite",
        color_anim1: "color_anim 1s infinite 0.6s",
        color_anim2: "color_anim 1s infinite 0.4s",
        color_anim3: "color_anim 1s infinite 0.2s",
        bubbles: "bubbles 2s linear infinite",
      },
      keyframes: {
        "gradient-slide": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        color_anim1: {
          "0%": { fill: "white" },
          "50%": { fill: "#FBC638" },
          "100%": { fill: "white" },
        },
        color_anim2: {
          "0%": { fill: "white" },
          "50%": { fill: "#FBC638" },
          "100%": { fill: "white" },
        },
        color_anim3: {
          "0%": { fill: "white" },
          "50%": { fill: "#FBC638" },
          "100%": { fill: "white" },
        },
        bubbles: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-66.666%)" },
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
