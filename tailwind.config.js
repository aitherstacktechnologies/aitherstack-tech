/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ast-bg': '#000000',
        'ast-surface': 'rgba(255, 85, 0, 0.08)',
        'ast-surface-2': 'rgba(255, 85, 0, 0.12)',
        'ast-stone': 'rgba(255, 255, 255, 0.06)',
        'ast-text': '#FFFFFF',
        'ast-muted': '#FFFFFF',
        'ast-accent': '#FF5500',
        'ast-accent-hover': '#FF6B00',
        'ast-accent-soft': 'rgba(255, 85, 0, 0.15)',
        'ast-border': 'rgba(255, 85, 0, 0.2)',
        'ast-glow': '#FF5500',
        'ast-peach': '#FF5500',
        'ast-ivory': '#FFFFFF',
        'ast-warm-orange': '#F36B3F',
      },
    },
  },
  plugins: [],
}