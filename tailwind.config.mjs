/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jp: {
          bg: '#F7F5F0',
          surface: '#EDEBE6',
          surfaceAlt: '#E8E5DE',
          navy: '#172033',
          muted: '#5F6470',
          light: '#9A9DA6',
          border: '#D6D3CB',
          borderLight: '#E8E5DE',
          accent: '#E85D3A',
          accentHover: '#D14E2E',
          accentLight: '#FDEEE9',
          vermillion: '#C94040',
          warmWhite: '#FDFCFA',
          charcoal: '#1A1A2E',
        },
      },
      fontFamily: {
        jp: ['"Noto Sans JP"', '"Inter"', 'sans-serif'],
        display: ['"Noto Sans JP"', '"Inter"', 'sans-serif'],
        body: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      letterSpacing: {
        'jp': '0.08em',
        'jp-wide': '0.15em',
        'jp-tight': '0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'scale-in': 'scaleIn 0.3s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
