/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        background: '#05051a',
        surface: '#0a0a2a',
        primary: '#0a84ff',
        secondary: '#bf5af2',
        accent: '#30d158',
        apple: {
          blue: '#0a84ff',
          green: '#30d158',
          purple: '#bf5af2',
          yellow: '#ffd60a',
          red: '#ff453a',
          orange: '#ff9f0a',
        },
      },
      borderRadius: {
        capsule: '980px',
        card: '14px',
        'card-lg': '16px',
        cell: '12px',
        icon: '9px',
        control: '8px',
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
