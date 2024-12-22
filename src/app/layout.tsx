import type { Metadata } from 'next'
import { Poppins, Josefin_Sans } from 'next/font/google'
import '@/styles/globals.scss'
import { BackgroundEllipsis } from '@/components/shared/ui/BackgroundEllipsis/BackgroundEllipsis'

const poppins = Poppins({
	variable: '--poppins',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const josefinSans = Josefin_Sans({
	variable: '--josefin-sans',
	subsets: ['latin'],
	weight: ['300', '400'],
})

export const metadata: Metadata = {
	title: 'Islamic Courses by Samadov J.',
	description:
		'A platform designed to offer engaging and accessible Islamic educational courses, providing multimedia content, user dashboards, and progress tracking for learners.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.variable} ${josefinSans.variable} antialiased`}
			>
				<BackgroundEllipsis>{children}</BackgroundEllipsis>
			</body>
		</html>
	)
}
