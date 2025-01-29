/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slot-machine-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slot-machine-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slot-machine-down": "slot-machine-down 0.5s ease-in-out",
        "slot-machine-up": "slot-machine-up 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
