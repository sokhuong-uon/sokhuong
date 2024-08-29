import { Archivo_Black } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] });

export function HeroSection() {
	return (
		<div className="max-w-3xl py-24 lg:py-36 h-fit  max-h-[100vw] flex flex-col items-center justify-center gap-10">
			<h1
				className={`${archivoBlack.className} sm:text-6xl text-balance font-bold antialiased text-center text-3xl xs:text-4xl text-neutral-400 contrast-more:text-neutral-300 [&>em]:text-foreground`}
			>
				Build software applications we could{" "}
				<span className="text-primary">rely on</span>
			</h1>
			<p className="text-lg sm:text-xl lg:text-2xl max-w-2xl text-neutral-400 contrast-more:text-neutral-300 text-center text-balance">
				Hi! I am Sokhuong. A software engineer, technical writer, and the one
				who pay attention to details.
			</p>
			<div className="flex gap-4">
				<Button size={"lg"} asChild className="focus:underline">
					<Link href="/sketch">See my sketches</Link>
				</Button>
				<Button
					size={"lg"}
					variant={"outline"}
					asChild
					className="focus:underline"
				>
					<Link href="/about#contact">Let&apos;s talk</Link>
				</Button>
			</div>
		</div>
	);
}
