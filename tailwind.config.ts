import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: 'var(--blue)',
					light: 'var(--blue-light)',
				},
				sky_blue: {
					DEFAULT: 'var(--sky-blue)',
					light: 'var(--sky-blue-light)',
				},
				purple: 'var(--purple)',
				white: 'var(--white)',
				gray: 'var(--gray)',
			},
			fontFamily: {
				poppins: ['var(--poppins)', 'sans-serif'],
				josefin_sans: ['var(--josefin-sans)', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config
