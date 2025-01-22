/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'inter': ['"Inter"', 'sans-serif'],
			'vcrosdneue': ['"VCrosdNeue"', 'sans-serif'],
			'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
			'poppins': ['"Poppins"', 'sans-serif'],
			'geistmono': ['"Geist Mono"', 'monospace'],
			'geist': ['"Geist"', 'sans-serif'],
			'geist': ['"Space Mono"', 'serif']
		  },
		extend: {},
	},
	plugins: [],
}
