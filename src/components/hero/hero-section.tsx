import { Archivo_Black } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] });

export function HeroSection() {
	return (
		<div className="py-24 lg:py-36 h-fit max-h-[100vw] flex flex-col items-center justify-center gap-10 container">
			<h1
				className={`${archivoBlack.className} sm:text-6xl text-balance font-bold antialiased text-center text-3xl xs:text-4xl  [&>em]:text-foreground`}
			>
				Build <span className="text-primary">reliable</span> software
			</h1>
			<p className="sm:text-xl lg:text-2xl max-w-96 sm:max-w-2xl text-center text-balance">
				Hi! I&apos;m Sokhuong; a software engineer and a technical writer
				wannabe 😄
			</p>
			<div className="flex gap-4">
				<Button size={"lg"} asChild className="">
					<Link href="/sketch">My sketches</Link>
				</Button>
				<Button size={"lg"} variant={"outline"} asChild>
					<Link href="/about#contact">Let&apos;s talk</Link>
				</Button>
			</div>
		</div>
	);
}
