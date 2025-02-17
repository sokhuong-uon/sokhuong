import { Archivo_Black } from 'next/font/google'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] })

export function HeroSection() {
	return (
		<div className="container flex h-fit max-h-[100vw] flex-col items-center justify-center gap-10 py-24 lg:py-36">
			<h1
				className={`${archivoBlack.className} text-balance text-center text-3xl font-bold antialiased xs:text-4xl sm:text-6xl [&>em]:text-foreground`}
			>
				Build <span className="text-primary">reliable</span> software
			</h1>
			<p className="max-w-96 text-balance text-center sm:max-w-2xl sm:text-xl lg:text-2xl">
				Hi! I&apos;m Sokhuong; a software engineer and a technical writer
				wannabe 😄
			</p>
			<div className="flex gap-4">
				<Button size={'lg'} asChild className="">
					<Link prefetch href="/sketch">
						My sketches
					</Link>
				</Button>
				<Button size={'lg'} variant={'outline'} asChild>
					<Link prefetch href="/about#contact">
						Let&apos;s talk
					</Link>
				</Button>
			</div>
		</div>
	)
}
