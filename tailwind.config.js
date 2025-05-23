module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        saddlebrown: '#8B4513', // Custom color
        eggshell: '#F0EAD6', // Add the custom eggshell color
      },
      backgroundColor: {
        eggshell: '#F0EAD6', // Add the custom eggshell background color
      },
    },
  },
  plugins: [],
};