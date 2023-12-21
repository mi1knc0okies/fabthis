import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF6600",
          "secondary": "#8C1C13",
          "accent": "#84A59D",
          "neutral": "#F7EDE2",
          "base-100": "#2d2918",
          "info": "#0081c7",
          "success": "#50b100",
          "warning": "#ff7700",
          "error": "#ff7a8e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
