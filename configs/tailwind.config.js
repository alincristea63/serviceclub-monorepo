/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui-components/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ServiceClub Brand Colors
        brand: {
          primary: '#FF4B4B', // RED-100
          secondary: '#1A365D', // NAVY-100
        },
        // RED Palette
        red: {
          25: '#FED2D3',   // RED-025
          50: '#FDA5A7',   // RED-050
          75: '#FD7A7C',   // RED-075
          100: '#FF4B4B',  // RED-100 (Primary)
          DEFAULT: '#FF4B4B',
        },
        // NAVY Palette
        navy: {
          25: '#C0CBD3',   // NAVY-025
          50: '#8296A6',   // NAVY-050
          75: '#44637A',   // NAVY-075
          100: '#1A365D',  // NAVY-100 (Secondary)
          DEFAULT: '#1A365D',
        },
        // GREEN Palette
        green: {
          25: '#E2F8C8',   // GREEN-025
          50: '#C4F290',   // GREEN-050
          75: '#A7EC58',   // GREEN-075
          100: '#8AE621',  // GREEN-100
          DEFAULT: '#8AE621',
        },
        // NEON Palette
        neon: {
          25: '#F8FFCE',   // NEON-025
          50: '#F1FE9F',   // NEON-050
          75: '#ECFE6D',   // NEON-075
          100: '#E3FF1A',  // NEON-100
          DEFAULT: '#E3FF1A',
        },
        // PURPLE Palette
        purple: {
          25: '#D1D1EF',   // PURPLE-025
          50: '#A3A4DF',   // PURPLE-050
          75: '#7777D1',   // PURPLE-075
          100: '#4844C4',  // PURPLE-100
          DEFAULT: '#4844C4',
        },
        // SILVER/BLUE Palette
        silver: {
          25: '#DDE8F0',   // BLUE-025
          50: '#BDD3E5',   // BLUE-050
          75: '#F1F1F1',   // SILVER-075
          100: '#E5E5E5',  // SILVER-100
          DEFAULT: '#E5E5E5',
        },
        blue: {
          25: '#DDE8F0',   // BLUE-025
          50: '#BDD3E5',   // BLUE-050
          DEFAULT: '#BDD3E5',
        },
        // Semantic Colors
        success: '#8AE621',    // GREEN-100
        warning: '#E3FF1A',    // NEON-100
        error: '#FF4B4B',      // RED-100
        info: '#4844C4',       // PURPLE-100
        // Neutral Colors
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        // ServiceClub Typography System
        'display': ['Clash Display', 'system-ui', 'sans-serif'], // For headings and titles
        'sans': ['Poppins', 'system-ui', 'sans-serif'], // For body text
        'mono': ['JetBrains Mono', 'monospace'], // For code
      },
      fontSize: {
        // Typography Scale based on ServiceClub design system
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],      // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],       // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],  // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],    // 36px
        '5xl': ['3rem', { lineHeight: '1' }],            // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],         // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],          // 72px
        '8xl': ['6rem', { lineHeight: '1' }],            // 96px
        '9xl': ['8rem', { lineHeight: '1' }],            // 128px
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(255, 75, 75, 0.15)',
        'brand-lg': '0 10px 25px 0 rgba(255, 75, 75, 0.2)',
        'navy': '0 4px 14px 0 rgba(26, 54, 93, 0.15)',
        'navy-lg': '0 10px 25px 0 rgba(26, 54, 93, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}; 