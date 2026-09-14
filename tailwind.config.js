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
        'ast-surface': '#151515',
        'ast-surface-2': '#1A1A1A',
        'ast-stone': '#1E1E1E',
        'ast-text': '#F5F1E8',
        'ast-muted': '#8A8A8A',
        'ast-accent': '#FF6B1A',
        'ast-accent-hover': '#FF8C42',
        'ast-accent-soft': '#1E1A15',
        'ast-border': '#2A2A2A',
        'ast-glow': '#FF6B1A',
      },
    },
  },
  plugins: [],
}
