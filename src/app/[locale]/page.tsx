import { HeroSection } from "@/components/hero/hero-section";
import { getTranslations } from "next-intl/server";

export default async function Home() {
	const t = await getTranslations("Home");
	return (
		<main
			id="main"
			className="flex items-center justify-center w-full flex-col"
		>
			<HeroSection />
		</main>
	);
}
