import { HeroSection } from "@/components/hero/hero-section";
import { ValueSection } from "@/components/value/value-section";

import "./themes.css";
import { ThemeColorCustomizer } from "@/features/theme/components/theme-color-customizer";
import { ThemeRadiusCustomizer } from "@/features/theme/components/theme-radius-customizer";
import { ThemeModeCustomizer } from "@/features/theme/components/theme-mode-customizer";

export default function Home() {
	return (
		<main
			id="main"
			className="flex items-center justify-center w-full flex-col"
		>
			<HeroSection />
			<div className="flex flex-col space-y-6">
				<ThemeModeCustomizer className="container" />
				<ThemeRadiusCustomizer className="container" />
				<ThemeColorCustomizer className="container" />
			</div>
			<ValueSection />
		</main>
	);
}
