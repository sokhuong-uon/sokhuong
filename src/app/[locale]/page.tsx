import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home() {
	const t = await getTranslations("Home");
	return (
		<main
			id="main"
			className="flex items-center justify-center w-full flex-col"
		>
			<div className="max-w-3xl border py-24 h-fit  max-h-[100vw] flex flex-col items-center justify-center gap-8">
				<h1 className="sm:text-6xl text-balance font-bold antialiased text-center text-3xl xs:text-4xl text-neutral-400 [&>em]:text-foreground">
					build <em>Secure</em> and <em>Accessible</em> software applications
				</h1>
				<p className="text-lg sm:text-xl max-w-2xl text-neutral-300 text-center text-balance">
					Hi! I am Sokhuong. A curious software engineer, technical writer, and
					the one who pay attention to details.
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
		</main>
	);
}
