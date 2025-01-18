module.exports = {
  theme: {
    extend: {
      keyframes: {
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
      },
      animation: {
        color_anim1: "color_anim 1s infinite 0.6s",
        color_anim2: "color_anim 1s infinite 0.4s",
        color_anim3: "color_anim 1s infinite 0.2s",
      },
    },
  },
  plugins: [],
};
