import type { Metadata } from 'next'
import { Noto_Sans_Khmer } from 'next/font/google'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/features/navigation/components/navbar'
import { SkipToMainContent } from '@/features/navigation/components/skip-to-main-content'
import { ThemeWrapper } from '@/features/theme/components/theme-wrapper'

import './globals.css'

const notoSans = Noto_Sans_Khmer({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Sokhuong',
	description:
		"A Software Engineer. I've been working as a web developer since 2020; I mostly build applications using TypeScript, React, Next.js, Vue, Nuxt.js, and Tailwind CSS.",
}

export default async function RootLayout({
	children,
	storemodal,
	skillmodal,
}: Readonly<{
	children: React.ReactNode
	storemodal: React.ReactNode
	skillmodal: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className="relative h-dvh"
			style={{ backgroundColor: 'black' }}
		>
			<body
				className={`${notoSans.className} relative flex min-h-full flex-col`}
			>
				<NextThemesProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ThemeWrapper className="flex flex-1 flex-col">
						<SkipToMainContent />

						<header className="sticky top-0 z-40">
							{/* <div className="container">
							</div> */}
							<Navbar />
						</header>

						{storemodal}
						{skillmodal}
						{children}

						<Footer className="mt-auto lg:container" />
					</ThemeWrapper>
				</NextThemesProvider>
			</body>
		</html>
	)
}
