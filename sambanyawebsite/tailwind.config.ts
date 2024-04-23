import type { Config } from 'tailwindcss';

import daisyui from 'daisyui';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f54242',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#000000',
          'base-100': '#D3D3D3',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
export default config;
