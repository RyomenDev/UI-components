module.exports = {
  theme: {
    extend: {
      // Customizations if needed
    },
  },
  plugins: [require("tailwindcss-pseudo-elements")],
  variants: {
    extend: {
      before: ["hover"],
      after: ["hover"],
    },
  },
};
