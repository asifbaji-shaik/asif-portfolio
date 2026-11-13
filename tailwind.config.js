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
        dark: {
          bg: '#030712', // deep rich black-navy
          surface: '#0B0F19',
          card: '#111827',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#1F2937'
        },
        brand: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          purple: '#A855F7'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15), transparent 60%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.25)',
        'glow-md': '0 0 25px rgba(99, 102, 241, 0.35)',
        'glow-lg': '0 0 35px rgba(139, 92, 246, 0.45)',
        'card-glow': '0 10px 30px -10px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

