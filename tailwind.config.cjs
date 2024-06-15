import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      primary: '#113353', //Dark blue
      secondary: '#034E7B', //Light blue
      accent: '#d60b4b', 
      accent2: '#00B2A4'
    },
    fontSize: {
			default: ['18px', { fontWeight: 400}],
			bold: ['18px', { fontWeight: 700}],
			large: ['24px', { fontWeight: 200 }],
			subtitle: ['24px', {  fontWeight: 700 }],
      custom: ['46px', { fontWeight: 200}],
			title: ['64px', { fontWeight: 900}]
		},
    fontFamily:{
			montserrat: ['Montserrat','sans-serif'],
		},
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.accent')}, ${theme('colors.accent2')})`,
      }),
  },
  },
  plugins: [animations],
}

