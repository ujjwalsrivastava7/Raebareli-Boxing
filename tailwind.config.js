/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boxing: {
          black: '#070709',
          dark: '#0C0D12',
          card: '#14161E',
          elevated: '#1B1E28',
          border: '#272B38',
          red: '#E50914',
          crimson: '#FF2A3B',
          neon: '#FF3850',
          gold: '#FFB800',
          goldLight: '#FFE066',
          silver: '#E2E8F0',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        display: ['Montserrat', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '94rem', // 1504px for expansive wide desktop screens
        '9xl': '104rem', // 1664px
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(229, 9, 20, 0.3), 0 0 30px rgba(229, 9, 20, 0.15)' },
          '50%': { boxShadow: '0 0 25px rgba(229, 9, 20, 0.5), 0 0 50px rgba(229, 9, 20, 0.25)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'neon-red': '0 0 20px -3px rgba(229, 9, 20, 0.45)',
        'neon-gold': '0 0 20px -3px rgba(255, 184, 0, 0.35)',
        'glow-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 15px rgba(229, 9, 20, 0.12)',
      }
    },
  },
  plugins: [],
}
