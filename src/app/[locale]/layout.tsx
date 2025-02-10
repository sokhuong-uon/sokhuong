import type { Metadata } from "next";
import { Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SkipToMainContent } from "@/components/nav/skip-to-main-content";
import { Navbar } from "@/components/nav/menu";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeWrapper } from "@/features/theme/components/theme-wrapper";

const notoSans = Noto_Sans_Khmer({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sokhuong",
	description:
		"A Software Engineer. I've been working as a web developer since 2020; I mostly build applications using TypeScript, React, Next.js, Vue, Nuxt.js, and Tailwind CSS.",
};

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = await getMessages();
	return (
		<html
			lang={locale}
			suppressHydrationWarning
			className="relative h-dvh"
			style={{ backgroundColor: "black" }}
		>
			<body
				className={`${notoSans.className} min-h-full relative flex flex-col`}
			>
				<NextIntlClientProvider messages={messages}>
					<NextThemesProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<ThemeWrapper className="flex flex-col flex-1">
							<SkipToMainContent />

							<header className="sticky top-0 z-40">
								<Navbar />
							</header>

							{children}

							<Footer className="container mt-auto" />
						</ThemeWrapper>
					</NextThemesProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
