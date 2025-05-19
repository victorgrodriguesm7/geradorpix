/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf6",
          100: "#dcfce9",
          200: "#bbf7d6",
          300: "#86efbb",
          400: "#4ade97",
          500: "#22c573",
          600: "#00AA5B",
          700: "#108353",
          800: "#0f674a",
          900: "#0c543e",
          950: "#042f21",
        },
        secondary: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcd7ff",
          300: "#8ebeff",
          400: "#599eff",
          500: "#2D81FF",
          600: "#1a63ff",
          700: "#0c4def",
          800: "#1841d3",
          900: "#1a3aa6",
          950: "#152563",
        },
        success: { 500: "#10b981", 600: "#059669" },
        warning: { 500: "#f59e0b", 600: "#d97706" },
        error: { 500: "#ef4444", 600: "#dc2626" },
      },
      animation: {
        'fade-in': 'fadeIn 0.75s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};