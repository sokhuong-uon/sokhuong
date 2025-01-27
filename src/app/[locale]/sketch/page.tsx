import { ModeToggle } from "@/components/darkmode-switcher";
import { SketchCard } from "@/components/sketch/sketch-card";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Sketch() {
	const t = await getTranslations("Home");
	const sketches = [
		{
			title: "Multi-page form",
			description: "A form wizard using React-hook-form and framer-motion.",
			href: "/sketch/multi-page-form-wizard/personal-information",
		},
	];

	return (
		<main id="main" className="flex items-center justify-center w-full">
			<ul
				className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full container py-16"
				aria-label="Sketches -- A list of things that I built for learning purpose."
			>
				{sketches.map(({ title, description, href }) => (
					<li key={title} aria-labelledby="sketch-title">
						<Link href={href}>
							<SketchCard title={title} description={description}></SketchCard>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
