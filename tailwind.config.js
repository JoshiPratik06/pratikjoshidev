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
        background: '#090a0c',
        surface: '#0f1115',
        'surface-elevated': '#161920',
        'surface-hover': '#1c202a',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-focus': 'rgba(216, 239, 97, 0.4)',
        primary: {
          DEFAULT: '#d8ef61',
          hover: '#e5f782',
          glow: 'rgba(216, 239, 97, 0.25)',
        },
        coral: {
          DEFAULT: '#f07857',
          glow: 'rgba(240, 120, 87, 0.25)',
        },
        text: {
          primary: '#f5f7fb',
          secondary: '#94a0b2',
          muted: '#5e6878',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', '"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 35px -5px rgba(216, 239, 97, 0.25)',
        'glow-coral': '0 0 35px -5px rgba(240, 120, 87, 0.25)',
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

