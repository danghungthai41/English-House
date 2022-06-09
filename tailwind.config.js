const plugin = require("tailwindcss/plugin");

const rotateX = plugin(({ addUtilities }) => {
  addUtilities({
    ".rotate-x-180": {
      transform: "rotateX(180deg)",
    },
  });
});

const rotateY = plugin(({ addUtilities }) => {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});
module.exports = {
  important: true,
  // mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      "1/2": "50%",
      70: "70px",
      80: "80px",
      "100vh": "100vh",
      550: "550px",
      600: "600px",
      660: "660px",
    },
    screens: {
      sm: "384px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        [`yellow-title`]: "#ffd22d",
        [`yellow-card`]: "#FFD165",
        [`primary-color`]: "#3d405b",
      },
      borderWidth: {
        5: "5px",
        1: "1px",
      },
      width: {
        22: "88px",
        50: "200px",
        84: "336px",
        84: "336px",
        84: "336px",
        114: "460px",
      },
      backgroundImage: {
        lessonBox: "linear-gradient(209.21deg,#fbb300 13.57%,#1ed0e2 98.38%)",
      },
      // rotate: {
      //   [`[zero]`]: "0deg",
      //   [`[first]`]: "1deg",
      //   [`[-first]`]: "-1deg",
      //   [`[second]`]: "2deg",
      //   [`[-second]`]: "-2deg",
      //   [`[third]`]: "3deg",
      //   [`[-third]`]: "-3deg",
      //   [`[fourth]`]: "4deg",
      //   [`[-fourth]`]: "-4deg",
      // },
      boxShadow: {
        card: "box-shadow: 0 1px 3px rgb(0 0 0 / 14%), 0 1px 2px rgb(0 0 0 / 24%)",
      },
    },
  },
  plugins: [rotateX, rotateY],
};
