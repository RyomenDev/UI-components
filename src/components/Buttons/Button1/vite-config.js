module.exports = {
  theme: {
    extend: {
      keyframes: {
        color_anim: {
          '0%': { fill: 'white' },
          '50%': { fill: '#FBC638' },
          '100%': { fill: 'white' },
        },
      },
      animation: {
        color_anim: 'color_anim 2s infinite', // Adjust duration and iteration as needed
      },
    },
  },
  plugins: [],
};
