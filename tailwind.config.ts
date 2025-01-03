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
					light_border: 'var(--sky-blue-light-border)',
				},
				purple: 'var(--purple)',
				white: 'var(--white)',
				gray: {
					DEFAULT: 'var(--gray)',
					blur: 'var(--gray-blur)',
					hover: 'var(--gray-hover)',
				},
			},
			fontFamily: {
				poppins: ['var(--poppins)', 'sans-serif'],
				josefin_sans: ['var(--josefin-sans)', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config
