/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: 'FFFFFF',
      primary: '#012649',
      secondary: '#113353',
      accent: '#1FC667',
      accent2: '#00B2A4'
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.accent')}, ${theme('colors.accent2')})`,
      }),
  },
  },
  plugins: [],
}

