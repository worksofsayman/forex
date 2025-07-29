/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include all source files
    ],
    theme: {
      extend: {
        animation: {
          float: "float 3s ease-in-out infinite",
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-8px)' },
          },
        },
      },
    },
    plugins: [],
  }
  