/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        background: '#080908',
        surface: '#121412',
        primary: '#2f81f7',
        secondary: '#3fb950',
        accent: '#f0b429',
        apple: {
          blue: '#2f81f7',
          green: '#3fb950',
          purple: '#a78bfa',
          yellow: '#ffd60a',
          red: '#ff453a',
          orange: '#ff9f0a'
        }
      },
      borderRadius: {
        capsule: '8px',
        card: '8px',
        'card-lg': '10px',
        cell: '8px',
        icon: '9px',
        control: '8px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
