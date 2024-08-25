import type { Metadata } from "next";
import { Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SkipToMainContent } from "@/components/nav/skip-to-main-content";

const notoSans = Noto_Sans_Khmer({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sokhuong",
	description: "A Software Engineer. I like creative coding and design.",
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
			<body className={`${notoSans.className} w-full h-full dark:bg-black`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<SkipToMainContent />
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
