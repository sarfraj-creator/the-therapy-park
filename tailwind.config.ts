import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tp-dark': '#1a1a2e',
        'tp-navy': '#16213e',
        'tp-cream': '#f5f0e8',
        'tp-yellow': '#e8e06a',
        'tp-purple': '#9b8ec4',
        'tp-sage': '#8a9b6e',
        'tp-muted': '#6b7280',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindAnimate],
}

export default config