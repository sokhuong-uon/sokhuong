import type { Metadata } from "next";
import { Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SkipToMainContent } from "@/components/nav/skip-to-main-content";
import { Menu } from "@/components/nav/menu";
import FooterMenu from "@/components/footer/footer-menu";

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
				className={`${notoSans.className} w-full h-full dark:bg-black flex flex-col`}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<SkipToMainContent />
						<header>
							<Menu />
						</header>
						{children}
						<footer className="container mt-auto">
							<FooterMenu />
						</footer>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
