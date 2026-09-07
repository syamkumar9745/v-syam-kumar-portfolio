/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: {
          50: '#0b1120',
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155',
          400: '#475569',
          500: '#64748b',
          600: '#94a3b8',
          700: '#cbd5e1',
          800: '#e2e8f0',
          900: '#f8fafc',
          950: '#ffffff',
        },
        dark: {
          bg: '#030712',
          card: '#080d1a',
          cardElevated: '#0d1527',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(99, 102, 241, 0.4)',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        neon: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          emerald: '#10b981',
          purple: '#a855f7',
          indigo: '#6366f1',
          rose: '#f43f5e',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.4)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'neon-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glass-dark-hover': '0 12px 40px 0 rgba(99, 102, 241, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
        'card-glow': '0 0 30px -10px rgba(99, 102, 241, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
