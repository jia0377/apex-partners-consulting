import type { Config } from 'tailwindcss'

/* ── Color Palette ───────────────────────────────────
 *  APEX PARTNERS — Premium Navy + Gold palette
 * ──────────────────────────────────────────────────── */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fefdf8',
          100: '#fdf9e8',
          200: '#faf0c5',
          300: '#f5e299',
          400: '#efd06a',
          500: '#d4a843',
          600: '#b8892e',
          700: '#966c24',
          800: '#7a5522',
          900: '#664721',
          950: '#3b250f',
        },
        navy: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#ccd5eb',
          300: '#a0b0da',
          400: '#6d86c4',
          500: '#4a66ae',
          600: '#384f92',
          700: '#2e4077',
          800: '#293863',
          900: '#1a2340',
          950: '#0d1220',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
