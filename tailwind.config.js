/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ast-bg': '#0A0A0A',
        'ast-surface': '#111111',
        'ast-surface-2': '#1A1A1A',
        'ast-stone': '#2A2A2A',
        'ast-text': '#FAFAFA',
        'ast-muted': '#888888',
        'ast-accent': '#FF4D00',
        'ast-accent-hover': '#FF6B2C',
      },
    },
  },
  plugins: [],
}
