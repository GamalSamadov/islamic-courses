import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	rewrites: async () => {
		return [
			{
				source: '/auth/google',
				destination: 'http://localhost:4200/auth/google',
			},
			{
				source: '/auth/github',
				destination: 'http://localhost:4200/auth/github',
			},
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
