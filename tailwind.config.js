/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundColor: {
        'dark': '#0a192f',
        'light': '#f3f4f6',
        'primaryDark': '#020c1b',
        'secondaryDark': '#112240',
        'primaryLight': '#0A3A62',
      },
      textColor: {
        'dark': '#ccd6f6',
        'light': '#111827',
        'primaryDark': '#64ffda',
        'secondaryDark': '#939cb8',
        'primaryLight': '#D4AF37',
        'secondaryLight': '#435978',
      },
      borderColor: {
        'primaryDark': '#64ffda',
        'primaryLight': '#D4AF37',
      }
    },
  },
  plugins: [],
}