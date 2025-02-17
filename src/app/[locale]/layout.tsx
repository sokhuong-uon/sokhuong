import type { Metadata } from 'next'
import { Noto_Sans_Khmer } from 'next/font/google'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
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
	params: { locale },
}: Readonly<{
	children: React.ReactNode
	storemodal: React.ReactNode
	params: { locale: string }
}>) {
	const messages = await getMessages()
	return (
		<html
			lang={locale}
			suppressHydrationWarning
			className="relative h-dvh"
			style={{ backgroundColor: 'black' }}
		>
			<body
				className={`${notoSans.className} relative flex min-h-full flex-col`}
			>
				<NextIntlClientProvider messages={messages}>
					<NextThemesProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<ThemeWrapper className="flex flex-1 flex-col">
							<SkipToMainContent />

							<header className="sticky top-0 z-40">
								<Navbar />
							</header>

							{storemodal}
							{children}

							<Footer className="container mt-auto" />
						</ThemeWrapper>
					</NextThemesProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
