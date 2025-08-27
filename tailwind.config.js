/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
        mulish: ["Mulish", "sans-serif"], // font mặc định cho Tailwind
        oswald: ["Oswald", "sans-serif"], // font phụ (nếu có)
      },
      keyframes: {
        slideUpFade: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUpFade: 'slideUpFade 0.6s ease forwards',
      },
      colors: {
        primary: {
          50: "#f0f9f0",
          100: "#dcf2dc",
          200: "#bae5ba",
          300: "#8dd48d",
          400: "#5cb85c",
          500: "#4caf50", // Main primary color
          600: "#3d8b40",
          700: "#2e7d32",
          800: "#1b5e20",
          900: "#0d4f0d",
        },
        
        secondary: {
          50: "#e8f5e8",
          100: "#c8e6c8",
          200: "#a5d6a5",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
        },
        success: {
          DEFAULT: "#4caf50",
          light: "#81c784",
          dark: "#2e7d32",
        },
        accent: {
          light: "#8bc34a",
          DEFAULT: "#7ed321",
          dark: "#689f38",
        },
      },
    },
  },
  plugins: [],
};
