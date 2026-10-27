/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Midnight Obsidian x Champagne Gold x Emerald Palette
        obsidian: {
          DEFAULT: '#111318',
          950: '#0B0C10',
          900: '#111318',
          800: '#181B22',
        },
        graphite: {
          DEFAULT: '#242730',
          light: '#2E323E',
          dark: '#1C1E26',
        },
        gold: {
          DEFAULT: '#C6A86B',
          50: '#FAF6EE',
          100: '#F5EDDD',
          200: '#EBDCBB',
          300: '#E0C58E', // Warm Gold
          400: '#D3B67C',
          500: '#C6A86B', // Champagne Gold
          600: '#A88B4E',
          700: '#8A6E35',
          800: '#695325',
          900: '#4D3C18',
          warm: '#E0C58E',
        },
        ivory: {
          DEFAULT: '#F5F0E6',
          light: '#FCF9F3',
          dark: '#EBE4D5',
        },
        stone: {
          DEFAULT: '#D9D1C3',
          light: '#E5DFD4',
          dark: '#C8BFB0',
        },
        emerald: {
          DEFAULT: '#176B55',
          light: '#228B70',
          hover: '#1B7B62',
          deep: '#104638',
          glow: 'rgba(23, 107, 85, 0.4)',
        },
        grey: {
          muted: '#9699A3',
          light: '#B0B3BD',
          dark: '#686B75',
        },
        brand: {
          dark: '#111318',
          surface: '#242730',
          accent: '#C6A86B',
          'accent-warm': '#E0C58E',
          secondary: '#176B55',
          light: '#F5F0E6',
        },
        // Fallback compatibility aliases
        terracotta: {
          DEFAULT: '#C6A86B',
          400: '#E0C58E',
          500: '#C6A86B',
          600: '#A88B4E',
          700: '#8A6E35',
          800: '#695325',
          900: '#4D3C18',
        },
        sand: {
          200: '#F5F0E6',
          300: '#E0C58E',
          400: '#C6A86B',
          500: '#C6A86B',
        },
        darkbrown: {
          DEFAULT: '#242730',
          base: '#111318',
          card: '#242730',
          elevated: '#2E323E',
        },
        taupe: {
          DEFAULT: '#9699A3',
          light: '#B0B3BD',
          dark: '#686B75',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 25px -5px rgba(198, 168, 107, 0.35)',
        'gold-sm': '0 0 15px -3px rgba(198, 168, 107, 0.25)',
        'emerald': '0 0 25px -5px rgba(23, 107, 85, 0.45)',
        'emerald-sm': '0 0 15px -3px rgba(23, 107, 85, 0.3)',
        'obsidian-card': '0 20px 40px -15px rgba(0, 0, 0, 0.65), 0 0 15px -3px rgba(198, 168, 107, 0.1)',
        'ivory-card': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'terracotta': '0 0 25px -5px rgba(198, 168, 107, 0.35)',
        'glass-warm': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(198, 168, 107, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #C6A86B 0%, #E0C58E 50%, #C6A86B 100%)',
        'obsidian-card': 'linear-gradient(180deg, rgba(36, 39, 48, 0.85) 0%, rgba(24, 27, 34, 0.95) 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
