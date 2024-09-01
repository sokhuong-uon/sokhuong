import { ModeToggle } from "@/components/darkmode-switcher";
import { SketchCard } from "@/components/sketch/sketch-card";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function Sketch() {
	const t = await getTranslations("Home");
	const sketches = [
		"A text editor built using Tiptap.",
		"A simple 3D editor using ThreeJS and React-three-fiber.",
		"A simple chat app using SocketIO.",
	];
	return (
		<main id="main" className="flex items-center justify-center w-full">
			<ul
				className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 border w-full container py-16"
				aria-label="Sketches -- A list of things that I built for learning purpose."
			>
				{sketches.map((title) => (
					<li key={title} aria-labelledby="sketch-title">
						<SketchCard
							title={title}
							description="A simple counter app."
						></SketchCard>
					</li>
				))}
			</ul>
		</main>
	);
}
